package com.revelup.funding.model.dao;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FundingMapper {

    void insertFunding(FundingFileDTO fundingFileDTO, FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterFileDTO setterFileDTO, SetterInfoDTO setterInfoDTO);

    void insertSetterInfo(SetterInfoDTO setterInfoDTO);

    void insertFundingInfo(FundingInfoDTO fundingInfoDTO);

//    FundingInfoDTO selectFundingInfo(int fndCode);
//    FundingFileDTO selectFundingFile(int fndCode);

    void insertGift(GiftDTO giftDTO);

    void insertFile(FundingFileDTO fundingFileDTO);


    List<FundingInfoDTO> selectAllFunding();

    //    void updateViews(int fndCode);

    FundingInfoDTO findByCode(int fndCode);

    List<FundingFileDTO> findFile(int fndCode);

    AuditDTO insertAudit(int fndCode);

    List<FundingFileDTO> findThumbnail();
}
