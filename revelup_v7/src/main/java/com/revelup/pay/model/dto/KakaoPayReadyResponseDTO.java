package com.revelup.pay.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class KakaoPayReadyResponseDTO {
	private String tid;
	@JsonProperty("next_redirect_app_url")
	private String nextRedirectAppUrl;
	@JsonProperty("next_redirect_mobile_url")
	private String nextRedirectMobileUrl;
	@JsonProperty("next_redirect_pc_url")
	private String nextRirectPcUrl;
	@JsonProperty("created_at")
	private String createdAt;
}
