package com.revelup.user.model.dao;

import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {

    /* 회원가입 ID 중복체크 */
    int idCheck(String userId);

    /* 회원가입  */
    int signup(UserDTO userDTO);

    /* 로그인할 때 필요한 ID 체크 */
    LoginUserDTO findByUserId(String userId);

    /* 로그인한 정보 출력 */
    LoginUserDTO findByLoginId(String loginUserId);

    /* 회원 정보 수정 */
    void userUpdate(LoginUserDTO loginUserDTO);

    /* ID 찾기 */
    UserDTO findId(UserDTO userDTO) throws Exception;

    /* PW 찾기 */
    UserDTO findPw(UserDTO userDTO);

    /* 이름 찾기 */
    int nameCheck(String userName);

    /* 이메일 찾기 */
    int emailCheck(String userEmail);

    /* PW 재설정 */
    void updatePw(UserDTO userDTO);

    void updateUserRole(String userId);

    LoginUserDTO userDelete(String userId);

    void userDelete2(LoginUserDTO loginUserDTO);
}
