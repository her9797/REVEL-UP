package com.revelup.auth.controller;

import com.revelup.config.SessionData;
import com.revelup.funding.model.dto.FundingFileDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.SetterFileDTO;
import com.revelup.funding.model.service.FundingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.List;

@Controller
public class MainController {

    private final FundingService fundingService;

    @Autowired
    private final SessionData sessionData;

    public MainController(FundingService fundingService, SessionData sessionData) {
        this.fundingService = fundingService;
        this.sessionData = sessionData;
    }

    @GetMapping(value = {"/", "/main"})
    public String main(Model model) {
        List<FundingInfoDTO> fundingInfoDTOList = fundingService.selectAllFunding();
        model.addAttribute("fundingList", fundingInfoDTOList);

        System.out.println("fundingInfoDTOList 메인컨트롤러 뭘까뭘까뭘까 = " + fundingInfoDTOList);

        

        return "main";
    }

//    @GetMapping("/main/{fndCode}")
//    public String findByCodeFromMain(@PathVariable("fndCode") int fndCode, Model model) {
//        // 조회수 처리
//        // fundingService.updateViews(fndCode);
//
//        // 상세내용 가져옴
//        FundingInfoDTO fundingInfoDTO = fundingService.findByCode(fndCode);
//        System.out.println("fundingInfoDTO 1 = " + fundingInfoDTO);
//        model.addAttribute("funding", fundingInfoDTO);
//
//        // 통계 데이터 중 선물 예상 발송일
////        FundingInfoDTO estimatedDeliv = fundingService.estimatedDeliv(fndCode);
////        model.addAttribute("estimatedDeliv", estimatedDeliv);
//
//        // MainThumbnail 첨부파일 가져옴
//        List<FundingFileDTO> fundingFileDTOList = fundingService.findFile(fndCode);
//        System.out.println("fundingFileDTOList 2 = " + fundingFileDTOList);
//        model.addAttribute("fundingFileList", fundingFileDTOList);
//
//        // DetailImg 첨부파일 가져옴
//        FundingFileDTO detailImage = fundingService.selectDetailImg(fndCode);
//        System.out.println("detailImage 3 = " + detailImage);
//        model.addAttribute("detailImage", detailImage);
//
//        // Stter Profile 첨부파일 가져옴
//        String userId = fundingInfoDTO.getUserId(); // 펀딩 정보에서 userId 추출
//        SetterFileDTO setterFile = fundingService.selectSttrImg(userId);
//        System.out.println("setterFile  4 = " + setterFile);
//        model.addAttribute("sttrImg", setterFile);
//        System.out.println("setterFile  5 = " + setterFile);
//
//        int fndCodeOfPay = fundingInfoDTO.getFndCode();
//        String fndName = fundingInfoDTO.getFndName();
//        int giftPrice = fundingInfoDTO.getGiftPrice();
//        String fndEndDt = fundingInfoDTO.getFndEndDt();
//
//        sessionData.setSessionAttribute("fndCodeOfPay", fndCodeOfPay);
//        sessionData.setSessionAttribute("fndName", fndName);
//        sessionData.setSessionAttribute("giftPrice", giftPrice);
//        sessionData.setSessionAttribute("fndEndDt", fndEndDt);
//
//
//        return "content/funding/detail-funding";
//
//    }
}
