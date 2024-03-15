package com.revelup.funding.controller;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.service.FundingManagerService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/manager")
public class FundingManagerController {

    private final FundingManagerService fundingManagerService;

    public FundingManagerController(FundingManagerService fundingManagerService) {
        this.fundingManagerService = fundingManagerService;
    }

    @GetMapping("/manager-find-select")
    public String managerFindSelectPage(Model model) {
        List<FundingInfoDTO> fundingInfoDTOManagerList = fundingManagerService.selectAllFundingManager();
        model.addAttribute("fundingManagerList", fundingInfoDTOManagerList);
        return "/manager/manager-find-select";
    }


    @GetMapping("/manager-aud")
    public String managerAuditPage() {
        return "/manager/manager-aud";
    }


}
