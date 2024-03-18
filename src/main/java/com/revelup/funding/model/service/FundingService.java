package com.revelup.funding.model.service;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dto.*;

import java.io.IOException;
import java.util.List;

public interface FundingService {

    void insertFirstFunding(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterInfoDTO setterInfoDTO, AuditDTO auditDTO) throws IOException;

    void addFundingToExisting(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, AuditDTO auditDTO) throws IOException;

    List<FundingInfoDTO> selectAllFunding();

//    void updateViews(int fndCode);

    FundingInfoDTO findByCode(int fndCode);

    List<FundingFileDTO> findFile(int fndCode);

    FundingFileDTO selectDetailImg(int fndCode);

    SetterFileDTO selectSttrImg(String userId);

    FundingInfoDTO getFundingByUserId(String userId);

//    FundingInfoDTO estimatedDeliv(int fndCode);
}
