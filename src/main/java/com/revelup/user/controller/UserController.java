package com.revelup.user.controller;

import com.revelup.user.model.dto.UserDTO;
import com.revelup.user.model.service.EmailService;
import com.revelup.user.model.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/content/user")
@AllArgsConstructor
public class UserController {

    public final UserService userService;
    public final EmailService emailService;


    // 로그인 페이지 이동
    @GetMapping("/login")
    public String loginPage(){
        return "content/user/login";
    }

    // 아이디 비밀번호 찾기 페이지 이동
    @GetMapping("/user-find")
    public String userFindPage() {
        return "content/user/user-find";
    }

    @GetMapping("/user-show")
    public String userShowPage(){
        return "content/user/user-show";
    }

    @GetMapping("/user-update")
    public String userUpdatePage() {
        return "content/user/user-update";
    }

    @GetMapping("/user-delete1")
    public String delete1Page() {
        return "content/user/user-delete1";
    }

    @GetMapping("/user-delete2")
    public String delete2Page(){
        return "content/user/user-delete2";
    }

    @GetMapping("/user-find-id")
    public String userFindId() {
        return "content/user/user-find-id";
    }

    @GetMapping("/user-find-password")
    public String userFindPassword(){
        return "content/user/user-find-password";
    }

    @GetMapping("/sign-up")
    public void signupUser(){}

    @PostMapping("/sign-up")
    public String signupUser(UserDTO userDTO){

        userService.signupUser(userDTO);

        return "main";
    }


    /** 이메일 전송 메소드 */
    @GetMapping("/sendMail")
    @ResponseBody
    public String sendMail(@RequestParam String email) throws Exception {

        return emailService.sendMailReject(email);

    }

}
