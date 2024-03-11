package com.revelup.funding.controller;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.FundingRequestDTO;
import com.revelup.funding.model.dto.SetterInfoDTO;
import com.revelup.funding.model.service.FundingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/content/funding")
@Slf4j      // 로그 찍기 위해 선언
public class FundingController {

    private final FundingService fundingService;

    public FundingController(FundingService fundingService) {
        this.fundingService = fundingService;
    }

    @GetMapping("/insertFunding/new-funding-terms-of-use")
    public String insertFND1() {
        return "content/funding/insertFunding/new-funding-terms-of-use";
    }

    @GetMapping("/insertFunding/new-funding-setter-info")
    public String insertFND2() {
        return "content/funding/insertFunding/new-funding-setter-info";
    }

    @PostMapping("/insertFunding/new-funding-setter-info")
    public String insertFND2(SetterInfoDTO setterInfoDTO) {
        System.out.println("fundingDTO = " + setterInfoDTO);
        fundingService.insertFND2(setterInfoDTO);
        return "content/funding/insertFunding/new-funding-basic-info";
    }

    @GetMapping("/insertFunding/new-funding-basic-info")
    public String insertFND3() {
        return "content/funding/insertFunding/new-funding-basic-info";
    }

    @PostMapping("/insertFunding/new-funding-basic-info")
    public String insertFND3(FundingInfoDTO fundingInfoDTO) {
        System.out.println("fundingInfoDTO = " + fundingInfoDTO);
        return "content/funding/insertFunding/new-funding-story";
    }

    @GetMapping("/insertFunding/new-funding-story")
    public String insertFND4() {
        return "content/funding/insertFunding/new-funding-story";
    }

    @GetMapping("/insertFunding/new-funding-gift-info")
    public String insertFND5() {
        return "content/funding/insertFunding/new-funding-gift-info";
    }

    @GetMapping("/insertFunding/new-funding-complete")
    public String insertFND6() {
        return "content/funding/insertFunding/new-funding-complete";
    }

    @GetMapping("/all-funding")
    public String selectAllFunding() {
        return "content/funding/all-funding";
    }

    @GetMapping("/detail-funding")
    public String selectDetailFunding() {
        return "content/funding/detail-funding";
    }



}
