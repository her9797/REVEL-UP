package com.revelup.funding.controller;

import com.revelup.funding.model.dto.*;
import com.revelup.funding.model.service.FundingService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/content/funding")
public class FundingController {

    private final FundingService fundingService;

    public FundingController(FundingService fundingService) {
        this.fundingService = fundingService;
    }

    @GetMapping("/insertFunding")
    public String insertFunding() {
        return null;
    }

    @PostMapping("/insertFunding")
    public String insertFunding(@ModelAttribute FundingInfoDTO fundingInfoDTO,
                                @ModelAttribute GiftDTO giftDTO,
                                @ModelAttribute SetterInfoDTO setterInfoDTO) {
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//        System.out.println("fundingFileDTO = " + fundingFileDTO);
        System.out.println("fundingInfoDTO = " + fundingInfoDTO);
        System.out.println("giftDTO = " + giftDTO);
//        System.out.println("setterFileDTO = " + setterFileDTO);
        System.out.println("setterInfoDTO = " + setterInfoDTO);
//        fundingService.insertFunding(fundingFileDTO, fundingInfoDTO, giftDTO, setterFileDTO, setterInfoDTO);
        fundingService.insertFunding(fundingInfoDTO, giftDTO, setterInfoDTO);
//        return "content/funding/insertFunding";
        return "content/user/user-show";
    }

//    @GetMapping("/insertFunding/new-funding-complete")
//    public String insertFNDComplete() {
//        return "content/funding/insertFunding/new-funding-complete";
//    }

    @GetMapping("/all-funding")
    public String selectAllFunding(Model model) {
        List<FundingInfoDTO> fundingInfoDTOList = fundingService.selectAllFunding();
        model.addAttribute("fundingList", fundingInfoDTOList);
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        System.out.println("fundingInfoDTOList = " + fundingInfoDTOList);
        return "content/funding/all-funding";
    }


    @GetMapping("/detail-funding")
    public String selectDetailFunding() {
        return "content/funding/detail-funding";
    }




}
