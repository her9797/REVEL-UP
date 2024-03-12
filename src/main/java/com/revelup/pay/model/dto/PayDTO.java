package com.revelup.pay.model.dto;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.GiftDTO;
import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import lombok.*;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PayDTO {

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


//    private LoginUserDTO userAdd;
//    private LoginUserDTO userName;
//    private LoginUserDTO userPhone;
//    private FundingInfoDTO fndName;
//    private FundingInfoDTO fndEndDt;
//    private DeliveryDTO trackingNo;
//    private GiftDTO giftName;



}