package com.revelup.pay.model.dto;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.GiftDTO;
import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import lombok.*;

import java.sql.Date;
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

    private LoginUserDTO login;
    private List<FundingInfoDTO> fundingInfo;
    private List<GiftDTO> gift;


}