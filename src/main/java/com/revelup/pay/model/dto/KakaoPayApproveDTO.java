package com.revelup.pay.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KakaoPayApproveDTO {
	private String cid; //가맹점 코드, 10자 (TC0ONETIME 테스트용)
	private String tid;
	@JsonProperty("partner_order_id")
	private String parterOrderId; //가맹점 주문번호, 최대 100자
	@JsonProperty("partner_user_id")
	private String partnerUserId; //가맹점 회원id , 최대 100자
	@JsonProperty("pg_token")
	private String pgToken;
}
