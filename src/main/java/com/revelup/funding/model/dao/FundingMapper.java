package com.revelup.funding.model.dao;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.SetterInfoDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FundingMapper {
    void insertFND2(SetterInfoDTO setterInfoDTO);

    void insertFND3(FundingInfoDTO fundingInfoDTO);
}
