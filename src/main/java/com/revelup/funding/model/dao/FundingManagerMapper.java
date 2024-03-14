package com.revelup.funding.model.dao;

import com.revelup.funding.model.dto.FundingInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FundingManagerMapper {

    List<FundingInfoDTO> selectAllFundingManager();
}
