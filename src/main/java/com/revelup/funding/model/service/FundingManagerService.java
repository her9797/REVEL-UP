package com.revelup.funding.model.service;

import com.revelup.funding.model.dto.FundingInfoDTO;

import java.util.List;

public interface FundingManagerService {
    List<FundingInfoDTO> selectAllFundingManager();
}
