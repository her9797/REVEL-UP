package com.revelup.audit.model.dao;

import com.revelup.audit.controller.AuditController;
import com.revelup.audit.model.dto.AuditDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AuditMapper {
    List<AuditDTO> auditList();
}
