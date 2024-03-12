package com.revelup.auth.controller;

import com.revelup.user.model.dto.LoginUserDTO;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
@RequestMapping("/content/user")
public class AuthController {

    @GetMapping("/login")
    public void login(){
    }

    @GetMapping("/fail")
    public ModelAndView loginFail(ModelAndView mv, @RequestParam String message) {
        mv.addObject("message", message);
        mv.setViewName("content/user/fail");

        return mv;
    }




}
