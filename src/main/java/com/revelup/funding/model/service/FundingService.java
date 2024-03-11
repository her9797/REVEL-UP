package com.revelup.funding.model.service;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.SetterInfoDTO;

public interface FundingService {

    public void insertFND2(SetterInfoDTO setterInfoDTO);

    public void insertFND3(FundingInfoDTO fundingInfoDTO);
}


