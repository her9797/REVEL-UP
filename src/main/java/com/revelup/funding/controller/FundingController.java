package com.revelup.funding.controller;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/content/funding")
@AllArgsConstructor
public class FundingController {

    @GetMapping("/insertFunding/new-funding-terms-of-use")
    public String insertFND1() {
        return "content/funding/insertFunding/new-funding-terms-of-use";
    }

    @GetMapping("/insertFunding/new-funding-setter-info")
    public String insertFND2() {
        return "content/funding/insertFunding/new-funding-setter-info";
    }

    @GetMapping("/insertFunding/new-funding-basic-info")
    public String insertFND3() {
        return "content/funding/insertFunding/new-funding-basic-info";
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

    @GetMapping("/heart-button")
    public String heartButton(Model model) {
        boolean isRedHeart = false; // 사용될 때 null이 될 수 있도록 Boolean으로 선언
        model.addAttribute("isRedHeart", isRedHeart);
        return "content/funding/all-funding";
    }

}
