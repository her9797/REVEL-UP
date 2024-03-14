package com.revelup.audit.model.serivce;

import com.revelup.audit.controller.AuditController;
import com.revelup.audit.model.dao.AuditMapper;
import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import lombok.AllArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class AuditService {

//    private AuditMapper auditMapper;





//    public List<AuditDTO> auditList(FundingInfoDTO fundingInfoDTO, AuditDTO auditDTO) {
//
////        int fundCode = fundingInfoDTO.getFndCode();
////        String dttm = fundingInfoDTO.getFndInsertDttm();
////
////        auditDTO.setFndCode(fundCode);
////        auditDTO.setFndInsertDttm(dttm);
//
//        return auditMapper.auditList();
//    }
}
