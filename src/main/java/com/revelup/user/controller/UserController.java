package com.revelup.user.controller;


import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import com.revelup.user.model.service.EmailService;
import com.revelup.user.model.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.apache.catalina.User;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
@RequestMapping("/content/user")
@AllArgsConstructor
public class UserController {

    @Autowired
    public final UserService userService;
    


    /** 회원가입 */
    @GetMapping("/sign-up")
    public void signup(){}

    /** 회원가입 */
    @PostMapping("/sign-up")
    public String signup(UserDTO userDTO){

        userService.signup(userDTO);

        return "redirect:/login"; // 가입 완료 후 로그인 페이지로 리턴
    }

    /** 회원가입 시 중복체크 */
    @PostMapping("/idCheck")
    @ResponseBody
    public boolean idCheck(@RequestParam("userId") String userId) throws Exception {

        return userService.idCheck(userId);
    }

    /** 로그인한 유저 정보 조회 및 출력 -> userShow PAGE */
    @GetMapping("/user-show")
    public String userShow (@AuthenticationPrincipal UserDetails userDetails, Model model) {

        String loginUserId = userDetails.getUsername();

        LoginUserDTO userDTO = userService.findByLoginId(loginUserId);

        model.addAttribute("user", userDTO);

        return "content/user/user-show";
    }

    @GetMapping("/user-update")
    public String userUpdatePage(Principal principal, Model model) {

        String loginUserId = principal.getName();

        LoginUserDTO userDTO = userService.findByLoginId(loginUserId);

        model.addAttribute("user", userDTO);

        return "content/user/user-update";
    }

    /** 회원 정보 수정 */
    @PostMapping("/user-update")
    public String userUpdate(LoginUserDTO loginUserDTO) {

        userService.userUpdate(loginUserDTO);

        return "redirect:/content/user/user-show";
    }


    // 아이디 비밀번호 찾기 페이지 이동
    @GetMapping("/user-find")
    public String userFindPage() {
        return "content/user/user-find";
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








}
