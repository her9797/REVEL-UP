package com.revelup.funding.controller;

import com.revelup.funding.model.dto.*;
import com.revelup.funding.model.service.FundingService;
import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/content/funding")
public class FundingController {

    private final FundingService fundingService;

    private final UserService userService;

    public FundingController(FundingService fundingService, UserService userService) {
        this.fundingService = fundingService;
        this.userService = userService;
    }

    @GetMapping("/insertFunding")
    public String insertFunding(Principal principal, Model model) {
        String loginUserId = principal.getName();
        LoginUserDTO userDTO = userService.findByLoginId(loginUserId);
        model.addAttribute("user", userDTO);

        return "content/funding/insertFunding";
    }

    @PostMapping("/insertFunding")
    public String insertFunding(@ModelAttribute FundingInfoDTO fundingInfoDTO,
                                @ModelAttribute GiftDTO giftDTO,
                                @ModelAttribute SetterInfoDTO setterInfoDTO) throws IOException {
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        System.out.println("fundingInfoDTO = " + fundingInfoDTO);
        System.out.println(" ");
        System.out.println("giftDTO = " + giftDTO);
        System.out.println(" ");
//        System.out.println("setterFileDTO = " + setterFileDTO);
        System.out.println("setterInfoDTO = " + setterInfoDTO);
        fundingService.insertFunding(fundingInfoDTO, giftDTO, setterInfoDTO);
        return "content/funding/insertFunding/new-funding-complete";
    }

    @GetMapping("/all-funding")
    public String selectAllFunding(Model model) {
        List<FundingInfoDTO> fundingInfoDTOList = fundingService.selectAllFunding();
        model.addAttribute("fundingList", fundingInfoDTOList);
        System.out.println("fundingInfoDTOList 컨트롤러 selectAllFunding = " + fundingInfoDTOList);

        List<FundingFileDTO> fundingFileDTOList = fundingService.findThumbnail();
        model.addAttribute("fundingThumbnailList", fundingFileDTOList);


        return "content/funding/all-funding";
    }

    @GetMapping("/all-funding/{fndCode}")
    public String findByCode(@PathVariable("fndCode") int fndCode, Model model) {
        // 조회수 처리
        // fundingService.updateViews(fndCode);

        // 상세내용 가져옴
        FundingInfoDTO fundingInfoDTO = fundingService.findByCode(fndCode);
        model.addAttribute("funding", fundingInfoDTO);
        System.out.println("fundingInfoDTO 컨트롤러 findByCode = " + fundingInfoDTO);

        // 첨부파일 가져옴
        List<FundingFileDTO> fundingFileDTOList = fundingService.findFile(fndCode);
        model.addAttribute("fundingFileList", fundingFileDTOList);

        return "content/funding/detail-funding";
    }

    @GetMapping("/detail-funding")
    public String selectDetailFunding() {
        return "content/funding/detail-funding";
    }




}
