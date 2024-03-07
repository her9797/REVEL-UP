package com.revelup.pay.controller;

import com.revelup.pay.model.dto.PayDTO;
import com.revelup.pay.model.service.PayService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/content/pay")
public class PayController {

    @RestController
    @RequestMapping("/pay")
    @RequiredArgsConstructor
    public class KakaoPayController {

        private final PayService.KakaoPayService kakaoPayService;

        /**
         * 결제요청
         * @return
         */
        @PostMapping("/ready")
        public PayDTO.KakaoReadyResponse readyToKakaoPay() {

            return kakaoPayService.kakaoPayReady();
        }


    @GetMapping("/pay")
    public String payPage() {
        return "content/pay/pay";
    }

