package com.revelup.pay.model.service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;

import com.revelup.config.KakaoPayConfig;

import com.revelup.config.SessionData;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.pay.model.dao.PlgMapper;
import com.revelup.pay.model.dto.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service

public class PayService {
	private static final ConcurrentHashMap<String, String> tidCacheMap = new ConcurrentHashMap();
	private final KakaoPayConfig kakaoPayConfig;

	private FundingInfoDTO fundingInfoDTO;
	private final PlgMapper plgMapper;

	@Autowired
	private SessionData sessionData;

	@Autowired
//	private final PayMapper paymapper;
	public PayService(KakaoPayConfig kakaoPayConfig, PlgMapper plgMapper) {
		this.kakaoPayConfig = kakaoPayConfig;
		this.plgMapper = plgMapper;
	}

	@Transactional
	public String kakaoPayReady(HttpServletRequest request, KakaoPayReadyDTO kakaoPayReadyDTO) {
		String url = kakaoPayConfig.getHost() + "/online/v1/payment/ready";
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "SECRET_KEY " + kakaoPayConfig.getTestSecretKey());
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		HttpEntity entity = new HttpEntity(kakaoPayReadyDTO, headers);

		RestTemplate restTemplate = new RestTemplate();
		KakaoPayReadyResponseDTO response = restTemplate.exchange(url, HttpMethod.POST, entity, KakaoPayReadyResponseDTO.class).getBody();
		//TODO : 추후 결제고유번호(tid) DB 저장하게 변경. 테스트를 위해 임시로 캐시에 저장.
		tidCacheMap.put(kakaoPayReadyDTO.getPartnerUserId(), response.getTid());

		return determineRedirectUrlBasedOnClientType(request, response);
	}

	private String determineRedirectUrlBasedOnClientType(HttpServletRequest request, KakaoPayReadyResponseDTO response) {
		String redirectUrl;
		// 클라이언트 종류 판단
		String userAgent = request.getHeader("User-Agent");
		String clientType = request.getHeader("X-Client-Type"); // 사용자 지정 헤더

		if (userAgent != null) {
			if (userAgent.contains("Mobile") || userAgent.contains("Android") || userAgent.contains("iPhone")) {
				if ("MobileApp".equals(clientType)) {
					// 모바일 앱에서 요청한 경우
					log.info("Request from Mobile App");
					log.info("userAgent : {}", userAgent);
					redirectUrl = response.getNextRedirectAppUrl();
				} else {
					// 모바일 웹에서 요청한 경우
					log.info("Request from Mobile Web");
					log.info("userAgent : {}", userAgent);
					redirectUrl = response.getNextRedirectMobileUrl();
				}
			} else {
				// PC 웹에서 요청한 경우
				log.info("Request from PC Web");
				log.info("userAgent : {}", userAgent);
				redirectUrl = response.getNextRirectPcUrl();
			}
		} else {
			// User-Agent 헤더가 없는 경우 PC로 처리
			log.info("User-Agent header is missing");
			redirectUrl = response.getNextRirectPcUrl();
		}

		return redirectUrl;
	}

	@Transactional
	public KaKaoPayApproveResponseDTO kakaoPayApprove(String userName, String pgToken, PayCompletionDTO payCompletionDTO, Principal principal) {
		String url = kakaoPayConfig.getHost() + "/online/v1/payment/approve";
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "SECRET_KEY " + kakaoPayConfig.getTestSecretKey());
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);

		KakaoPayApproveDTO kakaoPayApproveDTO = KakaoPayApproveDTO.builder()
			.cid(kakaoPayConfig.getCid())
			.tid(tidCacheMap.get(userName))
			.parterOrderId("testOrderId")
			.partnerUserId(userName)
			.pgToken(pgToken)
			.build();
		tidCacheMap.remove(userName);
		HttpEntity entity = new HttpEntity(kakaoPayApproveDTO, headers);

		RestTemplate restTemplate = new RestTemplate();
		KaKaoPayApproveResponseDTO response = restTemplate.exchange(url, HttpMethod.POST, entity, KaKaoPayApproveResponseDTO.class).getBody();
		log.info(response.toString());
		//TODO: 결제정보 DB에 저장.

		int fndCodeOfPay = (int) sessionData.getSessionAttribute("fndCodeOfPay");

		String userId = principal.getName();
		payCompletionDTO.setUserId(userId);
		payCompletionDTO.setFndCode(response.getFndCode());
		payCompletionDTO.setGiftQty(response.getQuantity());
		payCompletionDTO.setPlgDttm(response.getApprovedAt()); // 로컬데이트타임 확인 필요
		payCompletionDTO.setPlgPrice(response.getAmount().getTotal());
		payCompletionDTO.setFndCode(fndCodeOfPay);

		plgMapper.insertPlg(payCompletionDTO);

		System.out.println("❌카카오톡 어프로프 DOT❌" + kakaoPayApproveDTO);
		System.out.println("❌레스폰스❌" + response);
		System.out.println("❌페이컴플리트 DTO❌" + payCompletionDTO);


		return response;
	}



}