package com.revelup.pay.model.dao;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.pay.model.dto.KakaoPayReadyDTO;
import com.revelup.pay.model.dto.PayCompletionDTO;
import com.revelup.pay.model.dto.PayDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlgMapper {
    void insertPlg(PayCompletionDTO payCompletionDTO);

    int getFndCodePay(int fndCodeOfPay);

    void insertDeliv(DeliveryDTO deliveryDTO);

    void updateSuccessAmt(FundingInfoDTO fundingInfoDTO);
}
