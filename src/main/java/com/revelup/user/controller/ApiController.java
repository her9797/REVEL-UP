package com.revelup.user.controller;

import com.revelup.user.model.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/content/user")
@AllArgsConstructor
public class ApiController {

    @Autowired
    public final EmailService emailService;

    /** 이메일 전송 메소드 -> 회원가입 시 이메일 전송 */
    @GetMapping("/sendMail")
    @ResponseBody
    public String sendMail(@RequestParam("email") String email) throws Exception {

        return emailService.sendMailReject(email);

    }
}
