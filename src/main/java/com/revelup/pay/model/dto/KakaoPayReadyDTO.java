package com.revelup.pay.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.revelup.config.KakaoPayConfig;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class KakaoPayReadyDTO {
	private String cid; //가맹점 코드, 10자 (TC0ONETIME 테스트용)

	@JsonProperty("partner_order_id")
	private String parterOrderId; //가맹점 주문번호, 최대 100자
	@JsonProperty("partner_user_id")
	private String partnerUserId; //가맹점 회원id , 최대 100자
	@JsonProperty("item_name")
	private String giftName; //상품명, 최대 100자
	@JsonProperty("item_code")
	private String giftCode; //상품코드, 최대 100자
	private Integer quantity; //상품수량
	@JsonProperty("total_amount")
	private Integer totalAmount; //상품총액
	@JsonProperty("tax_free_amount")
	private Integer taxFreeAmount = 0; //상품 비과세 금액
	@JsonProperty("approval_url")
	private String approvalUrl; //결제 성공 시 redirect url,최대 255자
	@JsonProperty("cancel_url")
	private String cancelUrl; //결제 취소 시 redirect url,최대 25자
	@JsonProperty("fail_url")
	private String failUrl;  //결제 실패 시 redirect url,최대 25자


	public void setUserIdAndOrderId(String userId, String orderId) {
		partnerUserId = userId;
		parterOrderId = orderId;
	}

	public void setUrlsAndCid(KakaoPayConfig kakaoPayConfig) {
		cid = kakaoPayConfig.getCid();
		approvalUrl = kakaoPayConfig.getApprovalUrl();
		cancelUrl = kakaoPayConfig.getCancelUrl();
		failUrl = kakaoPayConfig.getFailUrl();
	}
}