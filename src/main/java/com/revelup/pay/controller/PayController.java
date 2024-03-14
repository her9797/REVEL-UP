package com.revelup.pay.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revelup.config.KakaoPayConfig;
import com.revelup.pay.model.dto.KaKaoPayApproveResponseDTO;
import com.revelup.pay.model.dto.KakaoPayReadyDTO;
import com.revelup.pay.model.dto.PayCompletionDTO;
import com.revelup.pay.model.service.PayService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

import java.security.Principal;

/**
 * 아래 두개의 페이지 참고.
 * 단건결제: https://developers.kakaopay.com/docs/payment/online/single-payment
 * 이해하기: https://developers.kakaopay.com/docs/payment/online/common
 */
@Slf4j // 롬복 어노테이션 중 로깅을 위한 Logger를 자동으로 생성한다,
@Controller
@RequestMapping("/content/pay")
public class PayController {
    /*페이지 경로를 지정해준다*/
    public static final String PAY_COMPLETE_PAGE = "/content/pay/pay-complete";
    public static final String PAY_CANCEL_PAGE = "/content/pay/pay-cancel";
    public static final String PAY_FAIL_PAGE = "/content/pay/pay-fail";

    /*의존성 주입 및 생성자 : 페이 서비스와 카카오페이 config를 객체를 주입받는 생성자를 성의*/
    private final PayService payService;
    private final KakaoPayConfig kakaoPayConfig;


    public PayController(PayService payService, KakaoPayConfig kakaoPayConfig) {
        this.payService = payService;
        this.kakaoPayConfig = kakaoPayConfig;
    }

    @GetMapping("/pay")
    public String payPage() {
        return "content/pay/pay";
    }


    //결제 준비
    @ResponseBody
    @PostMapping("/ready")
    public String kakaoPayReady(
            @AuthenticationPrincipal UserDetails userDetails,
            HttpServletRequest request,
            @RequestBody KakaoPayReadyDTO kakaoPayReadyDTO) {
        kakaoPayReadyDTO.setUserIdAndOrderId(userDetails.getUsername(), "testOrderId");
        kakaoPayReadyDTO.setUrlsAndCid(kakaoPayConfig);
        log.info("kakaoPayReadyDTO: {}", kakaoPayReadyDTO);

        String redirectUrl = payService.kakaoPayReady(request, kakaoPayReadyDTO);
        return redirectUrl;
    }

    //결제 승인
    @GetMapping("/success")
    public String kakaoPaySuccess( Principal principal,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam("pg_token") String pgToken,
            Model model) {
        log.info("pgToken: {}", pgToken);
        KaKaoPayApproveResponseDTO approveResponse = payService.kakaoPayApprove(userDetails.getUsername(), pgToken);

        PayCompletionDTO payCompletionDTO = PayCompletionDTO.builder()
                .giftName(approveResponse.getGiftName())
                .totalPrice(approveResponse.getAmount().getTotal())
                .createdAt(approveResponse.getApprovedAt())
                .quantity(approveResponse.getQuantity())
                .build();
        model.addAttribute("item", payCompletionDTO);

        return PAY_COMPLETE_PAGE;
    }

    //결제 취소
    @GetMapping("/cancel")
    public String kakaoPayCancel() {

        return PAY_CANCEL_PAGE;
    }

    //결제 실패(요청 유효 시간(15분) 경과)
    @GetMapping("/fail")
    public String kakaoPayFail() {

        return PAY_FAIL_PAGE;
    }

}