package com.revelup.funding.controller;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.config.SessionData;
import com.revelup.funding.model.dto.*;
import com.revelup.funding.model.service.FundingService;
import com.revelup.pay.controller.PayController;
import com.revelup.pay.model.dto.KakaoPayReadyDTO;
import com.revelup.pay.model.dto.PayDTO;
import com.revelup.pay.model.service.PayService;
import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import com.revelup.user.model.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.model.IModel;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/content/funding")
public class FundingController {

    private final FundingService fundingService;

    private final UserService userService;

    private final PayService payService;

    @Autowired
    private final SessionData sessionData;

    private PayController payController;

    public FundingController(FundingService fundingService, UserService userService, PayService payService, SessionData sessionData) {
        this.fundingService = fundingService;
        this.userService = userService;
        this.payService = payService;
        this.sessionData = sessionData;
    }

    @GetMapping("/insertFunding")
    public String insertFunding(Principal principal, Model model) {
        String loginUserId = principal.getName();
        LoginUserDTO userDTO = userService.findByLoginId(loginUserId);
        model.addAttribute("loginUserId", userDTO);

        // 해당 회원이 이미 등록한 펀딩 정보 조회
        FundingInfoDTO existingFundingInfoDTO = fundingService.getFundingByUserId(loginUserId);
        System.out.println("existingFundingInfoDTO = " + existingFundingInfoDTO);
        if (existingFundingInfoDTO != null) {
            return "content/funding/addFundingToExisting";
        } else {
            return "content/funding/insertFunding";
        }
    }

    // 펀딩 등록을 한 번도 하지 않은 경우 신규 펀딩 등록
    @PostMapping("/insertFunding")
    public String insertFirstFunding(@ModelAttribute FundingInfoDTO fundingInfoDTO,
                                     @ModelAttribute GiftDTO giftDTO,
                                     @ModelAttribute SetterInfoDTO setterInfoDTO,
                                     @ModelAttribute AuditDTO auditDTO,
                                     @ModelAttribute UserDTO userDTO,
                                     Model model) throws IOException {
        System.out.println("fundingInfoDTO = " + fundingInfoDTO);
        System.out.println(" ");
        System.out.println("giftDTO = " + giftDTO);
        System.out.println(" ");
        System.out.println("auditDTO = " + auditDTO);
        System.out.println(" ");
        System.out.println("setterInfoDTO = " + setterInfoDTO);

        String id = userDTO.getUserId();
        setterInfoDTO.setUserId(id);

        // 회원 아이디 조회 후 펀딩 등록과 함께 세터 권한 활성화
        String userId = setterInfoDTO.getUserId();
        updateUserRole(userId);

        fundingService.insertFirstFunding(fundingInfoDTO, giftDTO, setterInfoDTO, auditDTO);

        return "content/funding/insertFunding/new-funding-complete";
    }

    // 이미 펀딩 등록을 한 번이라도 한 경우 세터 정보 등록 없이 펀딩 등록
    @PostMapping("/addFundingToExisting")
    public String addFundingToExisting(@ModelAttribute FundingInfoDTO fundingInfoDTO,
                                       @ModelAttribute GiftDTO giftDTO,
                                       @ModelAttribute AuditDTO auditDTO) throws IOException {
        System.out.println("fundingInfoDTO = " + fundingInfoDTO);
        System.out.println(" ");
        System.out.println("giftDTO = " + giftDTO);
        System.out.println(" ");
        System.out.println("auditDTO = " + auditDTO);
        System.out.println(" ");

        fundingService.addFundingToExisting(fundingInfoDTO, giftDTO, auditDTO);

        return "content/funding/insertFunding/new-funding-complete";
    }


    /**
     * 유저 아이디만 가져가서, 세터로 변경
     */
    private void updateUserRole(String userId) {

        userService.updateUserRole(userId);

    }

    @GetMapping("/all-funding")
    public String selectAllFunding(Model model) {
        List<FundingInfoDTO> fundingInfoDTOList = fundingService.selectAllFunding();
        model.addAttribute("fundingList", fundingInfoDTOList);
        System.out.println("fundingInfoDTOList 🔥🔥🔥🔥🔥🔥🔥🔥 selectAllFunding = " + fundingInfoDTOList);

        return "content/funding/all-funding";
    }



    @GetMapping("/all-funding/{fndCode}")
    public String findByCode(@PathVariable("fndCode") int fndCode, Model model, Principal principal) {
        // 조회수 처리
        // fundingService.updateViews(fndCode);

        // 상세내용 가져옴
        FundingInfoDTO fundingInfoDTO = fundingService.findByCode(fndCode);
        System.out.println("!!!!!!!!!!!!" + fundingInfoDTO);
        model.addAttribute("funding", fundingInfoDTO);


        // 통계 데이터 중 선물 예상 발송일
//        FundingInfoDTO estimatedDeliv = fundingService.estimatedDeliv(fndCode);
//        model.addAttribute("estimatedDeliv", estimatedDeliv);

        // MainThumbnail 첨부파일 가져옴
        List<FundingFileDTO> fundingFileDTOList = fundingService.findFile(fndCode);
        model.addAttribute("fundingFileList", fundingFileDTOList);


        // DetailImg 첨부파일 가져옴
        FundingFileDTO detailImage = fundingService.selectDetailImg(fndCode);
        model.addAttribute("detailImage", detailImage);

        // Stter Profile 첨부파일 가져옴
        String userId = fundingInfoDTO.getUserId(); // 펀딩 정보에서 userId 추출
        SetterFileDTO setterFile = fundingService.selectSttrImg(userId);
        model.addAttribute("sttrImg", setterFile);

        System.out.println("🔥🔥🔥🔥🔥🔥🔥🔥" + fundingInfoDTO.getFndCode());


        int fndCodeOfPay = fundingInfoDTO.getFndCode();
        String fndName = fundingInfoDTO.getFndName();
        int giftPrice = fundingInfoDTO.getGiftPrice();
        String fndEndDt = fundingInfoDTO.getFndEndDt();
        String file = fundingInfoDTO.getSiSaveFile();

        sessionData.setSessionAttribute("fndCodeOfPay", fndCodeOfPay);
        sessionData.setSessionAttribute("fndName", fndName);
        sessionData.setSessionAttribute("giftPrice", giftPrice);
        sessionData.setSessionAttribute("fndEndDt", fndEndDt);
        sessionData.setSessionAttribute("file", file);



        return "content/funding/detail-funding";

    }



}





