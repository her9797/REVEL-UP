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

    // 후원내역조회
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

    // 나의 후원내역1 상세보기 페이지 이동
    @GetMapping("/getter-spons-details1")
    public String selectOnePlg(@RequestParam("plgCode") int plgCode, Model model) {

        log.info("plgCode : {}", plgCode);
        try {
            PayCompletionDTO plgDetails = mypageService.selectOne(plgCode);
            System.out.println("plgDetails :" + plgDetails);
            if (plgDetails == null) { // 조회 결과가 없는 경우
                log.info("해당 plgCode에 대한 데이터가 존재하지 않습니다: {}", plgCode);
                model.addAttribute("message", "해당 정보를 찾을 수 없습니다."); // 모델에 메시지 추가
            } else { // 조회 결과가 있는 경우
                log.info("plgDetails: {}", plgDetails); // 조회된 후원 내역 로깅
                model.addAttribute("plgDetails", plgDetails); // 모델에 후원 내역 추가
            }
            return "content/mypage/getter-spons-details1"; // 후원 내역 상세보기 페이지로 이동
        } catch (Exception e) { // 예외 처리
            log.error("페이지를 불러오는 중 오류가 발생했습니다.", e); // 오류 로깅
            // 예외를 발생시켜 공통 예외 처리 기능을 통해 사용자에게 적절한 응답을 할 수 있도록 함
            throw new RuntimeException("페이지를 불러오는 중 오류가 발생했습니다.", e);
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



    // 나의 후원내역2 상세보기 페이지 이동
    @GetMapping("/getter-spons-details2")
    public String getterSponsDetailsTwoPage() {
        return "content/mypage/getter-spons-details2";
    }

    // 나의 후원내역3 상세보기 페이지 이동
    @GetMapping("/getter-spons-details3")
    public String getterSponsDetailsThreePage() {
        return "content/mypage/getter-spons-details3";
    }


    // 세터의 펀딩 목록
    @GetMapping("/setter-fndList")
    public String setterFndListPage(Model model) {

        try {
            List<FundingInfoDTO> allFndList = mypageService.allFndList();
            model.addAttribute("allFndList", allFndList);
            log.info("allFndList: {}", allFndList);
            return "content/mypage/setter-fndList";
        } catch (Exception e) {
            log.error("페이지를 불러오는 중 오류가 발생했습니다.", e);
            throw new CustomException("페이지를 불러오는 중 오류가 발생했습니다.", e);
        }

    }

    // 세터의 펀딩목록 상세조회
    @GetMapping("/setter-funding-history/{fndCode}")
    public String setterSelectOneFnd(@PathVariable("fndCode")int fndCode, Model model) {

        log.info("fndCode : " + fndCode);

        FundingInfoDTO selectOneFnd = mypageService.sttrSelectOneFnd(fndCode);
        log.info("selectOne");

        List<PayCompletionDTO> plgList = mypageService.plgList(fndCode);

        model.addAttribute("selectOneFnd", selectOneFnd);
        System.out.println("selectOneFnd" + selectOneFnd);

        model.addAttribute("plgList", plgList);
        System.out.println("plgList" + plgList);
        return "/content/mypage/setter-funding-history";
    }

    // 찜한 목록 조회 페이지 이동
    @GetMapping("/all-wishlist")
    public String allWishListPage() {
        return "content/mypage/all-wishlist";
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



}
