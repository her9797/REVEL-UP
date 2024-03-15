package com.revelup.audit.model.serivce;

import com.revelup.audit.controller.AuditController;
import com.revelup.audit.model.dao.AuditMapper;
import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class AuditService {

    @Autowired
    private AuditMapper auditMapper;

    public List<AuditDTO> auditList(AuditDTO auditDTO) {
        return auditMapper.auditList(auditDTO);
    }


    public AuditDTO auditDetails(int fndCode) {

        return auditMapper.auditDetails(fndCode);
    }

    public void updateAudit(AuditDTO auditDTO) {

        auditMapper.updateAudit(auditDTO);

    }
}
