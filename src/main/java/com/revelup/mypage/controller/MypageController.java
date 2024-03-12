package com.revelup.mypage.controller;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.mypage.model.service.MypageService;
import com.revelup.pay.model.dto.PayCompletionDTO;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/content/mypage")
@Log4j2
public class MypageController {

    private final MypageService mypageService;

    public MypageController(MypageService mypageService) {
        this.mypageService = mypageService;
    }

    @GetMapping("/getter-ongoing")
    public String selectAllPlgList(Model model, Principal principal) {

        String userId = principal.getName();

        log.info("userId : {}", userId);

        try {
            List<PayCompletionDTO> allPlgList = mypageService.selectAllPlgList(userId);
            model.addAttribute("allPlgList", allPlgList);
            log.info("allPlgList: {}", allPlgList);
            return "content/mypage/getter-ongoing";
        } catch (Exception e) {
            log.error("페이지를 불러오는 중 오류가 발생했습니다.", e);
            throw new CustomException("페이지를 불러오는 중 오류가 발생했습니다.", e);
        }
    }

    // 후원철회 버튼 클릭 후 페이지 이동
    @GetMapping("/getter-refund")
    public String getterRefundPage(Model model, Principal principal) {
        String userId = principal.getName();
        log.info("userId : {}", userId);
        try {
            List<PayCompletionDTO> allPlgList = mypageService.selectRefundList(userId);
            model.addAttribute("allPlgList", allPlgList);
            log.info("allPlgList: {}", allPlgList);
            return "content/mypage/getter-refund";
        } catch (Exception e) {
            log.error("페이지를 불러오는 중 오류가 발생했습니다.", e);
            throw new CustomException("페이지를 불러오는 중 오류가 발생했습니다.", e);
        }
    }

    // 미달성 펀딩 버튼 클릭 시 페이지 이동
    @GetMapping("/failed-funding")
    public String failedFundingPage(Model model, Principal principal) {
        String userId = principal.getName();
        log.info("userId : {}", userId);
        try {
            List<PayCompletionDTO> allPlgList = mypageService.selectFailFndList(userId);
            model.addAttribute("allPlgList", allPlgList);
            log.info("allPlgList: {}", allPlgList);
            return "content/mypage/failed-funding";
        } catch (Exception e) {
            log.error("페이지를 불러오는 중 오류가 발생했습니다.", e);
            throw new CustomException("페이지를 불러오는 중 오류가 발생했습니다.", e);
        }
    }

    // 나의 후원내역1 상세보기 페이지 이동
    @GetMapping("/getter-spons-details1")
    public String selectOnePlg(Model model, Principal principal) {
        String userId = principal.getName();
        log.info("userId : {}", userId);
        try {
            PayCompletionDTO selectOnePlg = mypageService.selectOnePlg(userId);
            model.addAttribute("selectOnePlg", selectOnePlg);
            log.info("selectOnePlg: {}", selectOnePlg);
            return "content/mypage/getter-spons-details1";
        } catch (Exception e) {
            log.error("페이지를 불러오는 중 오류가 발생했습니다.", e);
            throw new CustomException("페이지를 불러오는 중 오류가 발생했습니다.", e);
        }
    }

    // 나의 후원내역2 상세보기 페이지 이동
    @GetMapping("/getter-spons-details2")
    public String getterSponsDetailsTwoPage() {
        return "content/mypage/getter-spons-details2";
    }


    @ExceptionHandler(CustomException.class)
    public String handleException(CustomException e, Model model) {
        model.addAttribute("errorMessage", e.getMessage());
        log.error("CustomException 발생: {}", e.getMessage());
        return "error";
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public static class CustomException extends RuntimeException {
        public CustomException(String message, Throwable cause) {
            super(message, cause);
        }
    }



//    // 나의 후원내역 상세보기 페이지 이동
//    @GetMapping("/getter-spons-details")
//    public String getterSponsDetailsPage() {
//        return "content/mypage/getter-spons-details";
//    }
//
//    @GetMapping("/getter-spons-details2")
//    public String getterSponsDetailsTwoPage() {
//        return "content/mypage/getter-spons-details2";
//    }
//



    // 찜한 목록 조회 페이지 이동
    @GetMapping("/all-wishlist")
    public String allWishListPage() {
        return "content/mypage/all-wishlist";
    }

    // 펀딩 내역조회 상세페이지 이동
//    @GetMapping("/setter-funding-history")
//    public String setterFundingHistoryProgressPage() {
//        return "/content/mypage/setter-funding-history";
//    }

    @GetMapping("/setter-funding-history/{fndCode}")
    public String sttrFndProPage(@PathVariable("fndCode")int fndCode, Model model, Principal principal) {

        String userId = principal.getName();
        List<FundingInfoDTO> plgList = mypageService.sttrFndPro(fndCode);
        model.addAttribute("plgList", plgList);
        System.out.println("plgList" + plgList);

        return "/content/mypage/setter-funding-history";
    }

    @GetMapping("/setter-fndList")
    public String setterFndListPage() {
        return "content/mypage/setter-fndList";
    }




}
