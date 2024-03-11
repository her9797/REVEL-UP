package com.revelup.mypage.controller;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.mypage.model.service.MypageService;
import com.revelup.pay.model.dto.PayDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/content/mypage")
public class MypageController {

    private final MypageService mypageService;

    public MypageController(MypageService mypageService) {
        this.mypageService = mypageService;
    }

    // 실패
    @GetMapping("/getter-ongoing")
    public ModelAndView selectAllPlgList(ModelAndView mv, Principal principal) {
        String userId = principal.getName();
        List<PayDTO> allPlgList = mypageService.selectAllPlgList(userId);
//        List<PayDTO> allPlgList = mypageService.selectAllPlgList();
        mv.addObject("allPlgList", allPlgList);
        mv.setViewName("/content/mypage/getter-ongoing");
        System.out.println("allPlgList" + allPlgList);
        return mv;
    }

//    @GetMapping("/getter-ongoing")
//    public String getterOngoingPage(Model model) {
//        List<PayDTO> allPlgList = mypageService.selectAllPagList();
//        model.addAttribute("allPlgList", allPlgList);
//        return "content/mypage/getter-ongoing";
//    }

//     나의 후원내역 조회 페이지 이동
//    @GetMapping("/getter-ongoing")
//    public String getterOngoingPage() {
//        return "content/mypage/getter-ongoing";
//    }

    // 나의 후원내역 상세보기 페이지 이동
    @GetMapping("/getter-spons-details")
    public String getterSponsDetailsPage() {
        return "content/mypage/getter-spons-details";
    }

    @GetMapping("/getter-spons-details2")
    public String getterSponsDetailsTwoPage() {
        return "content/mypage/getter-spons-details2";
    }

    // 후원철회 버튼 클릭 후 페이지 이동
    @GetMapping("/getter-refund")
    public String getterRefundPage() {
        return "content/mypage/getter-refund";
    }

    // 미달성 펀딩 버튼 클릭 시 페이지 이동
    @GetMapping("/failed-funding")
    public String failedFundingPage() {
        return "content/mypage/failed-funding";
    }

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
    public String sttrFndProPage(@PathVariable("fndCode")int fndCode, Model model) {

        List<FundingInfoDTO> plgList = mypageService.sttrFndPro(fndCode);
        model.addAttribute("plgList", plgList);
        System.out.println("plgList" + plgList);

        return "/content/mypage/setter-funding-history";
    }





}
