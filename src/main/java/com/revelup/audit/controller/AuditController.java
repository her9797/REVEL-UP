package com.revelup.audit.controller;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.audit.model.serivce.AuditService;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.notice.model.dto.NoticeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/manager")
public class AuditController {

    @Autowired
    private AuditService auditService;

    /** 펀딩 심사 목록 전체 리스트 */
    @GetMapping("/manager-audit")
    public String auditList(Model model, AuditDTO auditDTO){

        List<AuditDTO> audit = auditService.auditList(auditDTO);
        model.addAttribute("audit", audit);

        return "manager/manager-audit";
    }

    /** 펀딩 심사 상세조회 */
    @GetMapping("/auditDetails/{fndCode}")
    @ResponseBody
    public  AuditDTO auditDetails(@PathVariable int fndCode) {
        return auditService.auditDetails(fndCode);

    }

    @PostMapping("/updateAudit")
    public String updateAudit(AuditDTO auditDTO){

        auditService.updateAudit(auditDTO);

        return "redirect:/manager/manager-audit";

    }
}
