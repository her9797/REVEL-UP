package com.revelup.pay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/content/pay")
public class PayController {

    @GetMapping("/pay")
    public String payPage() {
        return "content/pay/pay";
    }
}
