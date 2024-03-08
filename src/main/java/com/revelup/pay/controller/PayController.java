package com.revelup.pay.controller;

import com.revelup.pay.model.dao.PayDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/content/pay")
public class PayController {
   // @Autowired
   // PayDAO payDAO;
   // @RequestMapping("/pay_complect")

    @GetMapping("/pay")
    public String payPage() {
        return "content/pay/pay";
    }
}