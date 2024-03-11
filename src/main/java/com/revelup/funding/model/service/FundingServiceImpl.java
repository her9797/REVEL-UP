package com.revelup.funding.model.service;

import com.revelup.funding.model.dao.FundingMapper;
import com.revelup.funding.model.dto.SetterInfoDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class FundingServiceImpl implements FundingService {

private final FundingMapper mapper;

public FundingServiceImpl(FundingMapper mapper) {this.mapper = mapper; }

    @Override
    public void insertFND2(SetterInfoDTO setterInfoDTO) {
        mapper.insertFND2(setterInfoDTO);
    }
}
