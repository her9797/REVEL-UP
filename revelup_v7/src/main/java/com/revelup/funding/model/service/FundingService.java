package com.revelup.funding.model.service;

import com.revelup.funding.model.dto.*;

import java.util.List;

public interface FundingService {

    //    void insertFunding(FundingFileDTO fundingFileDTO, FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterFileDTO setterFileDTO, SetterInfoDTO setterInfoDTO);
    void insertFunding(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterInfoDTO setterInfoDTO);


    List<FundingInfoDTO> selectAllFunding();
}
