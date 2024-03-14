package com.revelup.funding.model.service;

import com.revelup.funding.model.dao.FundingManagerMapper;
import com.revelup.funding.model.dto.FundingInfoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundingManagerServiceImpl implements FundingManagerService {

    private final FundingManagerMapper mapper;

    @Autowired
    public FundingManagerServiceImpl(FundingManagerMapper mapper) {
        this.mapper = mapper;
    }


    @Override
    public List<FundingInfoDTO> selectAllFundingManager() {
        return mapper.selectAllFundingManager();
    }
}
