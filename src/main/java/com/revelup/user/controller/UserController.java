package com.revelup.user.controller;


import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import com.revelup.user.model.service.EmailService;
import com.revelup.user.model.service.UserService;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/content/user")
@AllArgsConstructor
public class UserController {

    @Autowired
    public final UserService userService;

    @Autowired
    public final EmailService emailService;


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

    /** 이메일 전송 메소드 -> 회원가입 시 이메일 전송 */
    @GetMapping("/sendMail")
    @ResponseBody
    public String sendMail(@RequestParam("email") String email) throws Exception {

        return emailService.sendMailReject(email);

    }

    /** 로그인한 유저 정보 조회 및 출력 -> userShow PAGE */
    @GetMapping("/user-show")
    public String userShow (@AuthenticationPrincipal UserDetails userDetails, Model model) {

        String loginUserId = userDetails.getUsername();

        LoginUserDTO userDTO = userService.findByLoginId(loginUserId);

        model.addAttribute("user", userDTO);

        return "content/user/user-show";
    }


    // 아이디 비밀번호 찾기 페이지 이동
    @GetMapping("/user-find")
    public String userFindPage() {
        return "content/user/user-find";
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








}
