package com.revelup.funding.model.service;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dto.*;
import com.revelup.user.model.dto.UserDTO;

import java.io.IOException;
import java.util.List;

public interface FundingService {

    void insertFunding(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterInfoDTO setterInfoDTO, AuditDTO auditDTO) throws IOException;

    List<FundingInfoDTO> selectAllFunding();

//    void updateViews(int fndCode);

    FundingInfoDTO findByCode(int fndCode);

    List<FundingFileDTO> findFile(int fndCode);

    List<FundingFileDTO> findThumbnail();
}
