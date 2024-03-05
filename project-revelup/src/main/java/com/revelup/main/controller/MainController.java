package com.revelup.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String defaultPage(){
        return "main";
    }

    @GetMapping("main")
    public String main() {
        return "main";
    }

    // 회원가입 페이지 이동
    @GetMapping("/fragments/sign-up")
    public String signUpPage() {
        return "fragments/sign-up"; // 이동할 페이지의 이름
    }

    // 로그인 페이지 이동
    @GetMapping("/fragments/login")
    public String loginPage(){
        return "fragments/login";
    }

    // 아이디 비밀번호 찾기 페이지 이동
    @GetMapping("/fragments/user-find")
    public String userFindPage() {
        return "fragments/user-find";
    }

    @GetMapping("/fragments/user-show")
    public String userShowPage(){
        return "fragments/user-show";
    }

   @GetMapping("/fragments/user-update")
    public String userUpdatePage() {
        return "fragments/user-update";
   }

   @GetMapping("/fragments/user-delete1")
    public String delete1Page() {
        return "fragments/user-delete1";
   }

   @GetMapping("/fragments/user-delete2")
    public String delete2Page(){
        return "fragments/user-delete2";
   }
}
