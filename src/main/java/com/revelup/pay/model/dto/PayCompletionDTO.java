package com.revelup.pay.model.dto;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.GiftDTO;
import com.revelup.user.model.dto.LoginUserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class PayCompletionDTO {
	private String itemName;			// 선물 이름
	private Integer totalPrice;			// 후원 금액
	private Integer quantity;			// 선물 수량
	private LocalDateTime createdAt;	// 후원 일시

	private int plgCode;
	private String userId;
	private int fndCode;
	private int giftQty;
	private Date plgDttm;
	private int plgPrice;
	private Date plgCanDt;

	private String fndName; // Funding name
	private String giftName; // Gift name
	private Date fndEndDt; // Funding end date
	private String trackingNo; // Delivery tracking number
	private String userAdd; // User address
	private String userName; // User name
	private String userPhone; // User phone number

	private List<LoginUserDTO> login;
	private LoginUserDTO loginUser;
	private List<FundingInfoDTO> fundingInfo;
	private List<DeliveryDTO> delivery;
	private DeliveryDTO deliv;
	private List<GiftDTO> gift;
	private GiftDTO giftPrice;
}
