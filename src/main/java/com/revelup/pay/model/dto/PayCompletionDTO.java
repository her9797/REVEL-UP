package com.revelup.pay.model.dto;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.GiftDTO;
import com.revelup.user.model.dto.LoginUserDTO;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class PayCompletionDTO {

	private String itemName;			// 선물 이름
	private Integer totalPrice;			// 후원 금액
	private Integer quantity;			// 선물 수량
	private LocalDateTime createdAt;	// 후원 일시

}
