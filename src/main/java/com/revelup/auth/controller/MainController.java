package com.revelup.auth.controller;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.service.FundingService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class MainController {

    private final FundingService fundingService;

    public MainController(FundingService fundingService) {
        this.fundingService = fundingService;
    }

    @GetMapping(value = {"/", "/main"})
    public String main(Model model){
        List<FundingInfoDTO> fundingInfoDTOList = fundingService.selectAllFunding();
        model.addAttribute("fundingList", fundingInfoDTOList);
        System.out.println("fundingInfoDTOList 🔥🔥🔥🔥🔥🔥🔥🔥 selectAllFunding = " + fundingInfoDTOList);
        return "main";
    }


}
