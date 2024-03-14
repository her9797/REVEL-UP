package com.revelup.audit.controller;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.audit.model.serivce.AuditService;
import com.revelup.funding.model.dto.FundingInfoDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/manager")
public class AuditController {

    private AuditService auditService;

    @GetMapping("/manager-audit")
    public String userFindPage() {

        return "manager/manager-audit";
    }

//    /** 펀딩 심사 목록 전체 리스트 */
//    @GetMapping("auditList")
//    public String auditList(Model model, FundingInfoDTO fundingInfoDTO, AuditDTO auditDTO){
//
//        List<AuditDTO> auditList = auditService.auditList(fundingInfoDTO, auditDTO);
//
//        model.addAttribute("auditList", auditList);
//
//        return "manager/manager-audit";
//    }

}
