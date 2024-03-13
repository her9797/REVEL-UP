package com.revelup.funding.model.dao;

import com.revelup.funding.model.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FundingMapper {

    void insertFunding(FundingFileDTO fundingFileDTO, FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterFileDTO setterFileDTO, SetterInfoDTO setterInfoDTO);

    void insertSetterInfo(SetterInfoDTO setterInfoDTO);

    void insertFundingInfo(FundingInfoDTO fundingInfoDTO);

//    void insertFundingFileInfo(FundingFileDTO fundingFileDTO);

//    void insertSetterInfoFile(SetterFileDTO setterFileDTO);

    void insertGift(GiftDTO giftDTO);

    List<FundingInfoDTO> selectAllFunding();

    //    void updateViews(int fndCode);

    FundingInfoDTO findByCode(int fndCode);
}
