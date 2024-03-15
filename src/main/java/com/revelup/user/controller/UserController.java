package com.revelup.user.controller;


import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import com.revelup.user.model.service.EmailService;
import com.revelup.user.model.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.apache.catalina.User;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/content/user")
@AllArgsConstructor
public class UserController {

    @Autowired
    public final UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;


    /** 아이디 비번 찾기 페이지 이동 */
    @GetMapping("/user-find")
    public String userFindPage() {

        return "content/user/user-find";
    }

    /** 아이디 찾기 */
    @GetMapping("/findId")
    public String findId(Model model,
                         @RequestParam("userName") String userName,
                         @RequestParam("userEmail") String userEmail, UserDTO userDTO){

        try {
            userDTO.setUserName(userName);
            userDTO.setUserEmail(userEmail);
            UserDTO user = userService.findId(userDTO);

            model.addAttribute("user", user);
        } catch (Exception e){
            model.addAttribute("msg", "오류");
            e.printStackTrace();
        }

        return "content/user/user-find-id";
    }


    /** 비밀번호 재설정 1단계 */
    @GetMapping("/findPw")
    public String findPw(Model model,
                         @RequestParam("userId") String userId,
                         @RequestParam("userName") String userName,
                         @RequestParam("userEmail") String userEmail , UserDTO userDTO){

        System.out.println(userDTO);
        try {
            userDTO.setUserId(userId);
            userDTO.setUserName(userName);
            userDTO.setUserEmail(userEmail);

            UserDTO user = userService.findPw(userDTO);

            model.addAttribute("user", user);
        } catch (Exception e) {


        }

        return "content/user/user-find-password";
    }

    /** 비밀번호 재설정 2단계 */
    @PostMapping("updatePw")
    public String updatePw(UserDTO userDTO){

        userService.updatePw(userDTO);

        return "redirect:/main";

    }


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

    /** DB 아이디 찾기 */
    @PostMapping("/nameCheck")
    @ResponseBody
    public boolean nameCheck(@RequestParam("userName") String userName){
        return userService.nameCheck(userName);
    }

    /** DB 이메일 찾기 */
    @PostMapping("/emailCheck")
    @ResponseBody
    public boolean emailCheck(@RequestParam("userEmail") String userEmail) {
        return userService.emailCheck(userEmail);
    }


    /** 로그인한 유저 정보 조회 및 출력 -> userShow PAGE */
    @GetMapping("/user-show")
    public String userShow (@AuthenticationPrincipal UserDetails userDetails, Model model) {

        String loginUserId = userDetails.getUsername();

        LoginUserDTO userDTO = userService.findByLoginId(loginUserId);

        model.addAttribute("user", userDTO);

        return "content/user/user-show";
    }

    /** 회원정보 수정 */
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


    @GetMapping("/user-delete1")
    public String delete1Page() {
        return "content/user/user-delete1";
    }

    /** 회원 탈퇴 */
    @GetMapping("/user-delete2")
    public String userDelete(Principal principal, Model model){

        String userId = principal.getName();
        LoginUserDTO loginUser = userService.userDelete(userId);

        model.addAttribute("loginUser", loginUser);

        return "content/user/user-delete2";
    }

    @PostMapping("/user-delete2")
    public String userDelete2(Principal principal, LoginUserDTO loginUserDTO){

        String userId = principal.getName();

        loginUserDTO.setUserId(userId);

        userService.userDelete2(loginUserDTO);

        SecurityContextHolder.getContext().setAuthentication(null); // 인가 삭제

        return "redirect:/main";
    }

//    @GetMapping("/user-delete2")
//    public String delete2Page(){
//        return "content/user/user-delete2";
//    }



}
