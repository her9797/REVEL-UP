package com.revelup.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@ConfigurationProperties("kakao")
@RequiredArgsConstructor
@Getter
@ToString
public class KakaoPayConfig {
	private final String host;
	private final String testSecretKey;
	private final String cid;
	private final String approvalUrl; //결제 성공 시 redirect url,최대 255자
	private final String cancelUrl; //결제 취소 시 redirect url,최대 25자
	private final String failUrl;  //결제 실패 시 redirect url,최대 25자
}
