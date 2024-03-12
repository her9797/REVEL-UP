package com.revelup.pay.model.dto;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class PayCompletionDTO {
	private int plgCode;
	private String userId;
	private int fndCode;
	private int giftQty;
	private Date plgDttm;
	private int plgPrice;
	private Date plgCanDt;

	private String giftName;			// 선물 이름
	private Integer totalPrice;			// 후원 금액
	private Integer quantity;			// 선물 수량
	private LocalDateTime createdAt;	// 후원 일시
}
