package com.revelup.funding.model.dao;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dto.*;
import com.revelup.user.model.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FundingMapper {

    void insertSetterInfo(SetterInfoDTO setterInfoDTO);

    void insertFundingInfo(FundingInfoDTO fundingInfoDTO);

//    FundingInfoDTO selectFundingInfo(int fndCode);
//    FundingFileDTO selectFundingFile(int fndCode);

    void insertGift(GiftDTO giftDTO);

    void insertFile(FundingFileDTO fundingFileDTO);

    void insertSiFile(SetterFileDTO setterFileDTO);

    List<FundingInfoDTO> selectAllFunding();

    //    void updateViews(int fndCode);

    FundingInfoDTO findByCode(int fndCode);

    List<FundingFileDTO> findFile(int fndCode);

    /* 심사 등록 절대 삭제X */
    void insertAudit(AuditDTO auditDTO);

    void userUpdateRole(UserDTO userDTO);

    FundingInfoDTO getFundingByUserId(String userId);

}
