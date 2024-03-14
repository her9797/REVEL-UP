package com.revelup.user.model.service;

import com.revelup.user.model.dao.UserMapper;
import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import javax.print.DocFlavor;
import java.util.List;
import java.util.Objects;

@Service
//@RequiredArgsConstructor  -> (final 이 대상임) 초기화하는 생성자 자동으로 해줌
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;


    /** 아이디 찾기 */
    public UserDTO findId(UserDTO userDTO) throws Exception {

        return userMapper.findId(userDTO);
    }

    /** 비번찾기-1 */
    public UserDTO findPw(UserDTO userDTO) {
        return userMapper.findPw(userDTO);

    }

    /** 비번찾기-2 */
    public void updatePw(UserDTO userDTO) {
        String hashedPassword = passwordEncoder.encode(userDTO.getUserPw());
        userDTO.setUserPw(hashedPassword);
        userMapper.updatePw(userDTO);
    }


    /** 로그인 시 아이디 비교 */
    public LoginUserDTO findByUserId(String userId) {

        LoginUserDTO login = userMapper.findByUserId(userId);

        if (!Objects.isNull(login)) {
            return login;
        } else {
            return null;
        }

    }


    /** 회원가입 */
    public int signup(UserDTO userDTO) {

        userDTO.setUserPw(passwordEncoder.encode(userDTO.getUserPw()));

        int result = 0;

        try {
          result = userMapper.signup(userDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
   }

    /** 로그인 한 정보 조회 후 정보 출력 */
    public LoginUserDTO findByLoginId(String loginUserId) {

        return userMapper.findByLoginId(loginUserId);

    }

    /** 아이디 중복 체크 */
    public boolean idCheck(String userId) {

        int count = userMapper.idCheck(userId);
        return count > 0;
    }

    /** 회원 정보 수정 */
    public void userUpdate(LoginUserDTO loginUserDTO) {
        userMapper.userUpdate(loginUserDTO);
    }

    /** 이름 체크 */
    public boolean nameCheck(String userName) {

        int count = userMapper.nameCheck(userName);
        return count > 0;
    }

    /** 이메일 체크 */
    public boolean emailCheck(String userEmail) {

        int count = userMapper.emailCheck(userEmail);
        return count > 0;
    }
}
