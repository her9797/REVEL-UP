package com.revelup.user.model.dao;

import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

    /* 회원가입 ID 중복체크 */
    int idCheck(String userId);

    /* 회원가입  */
    int signup(UserDTO userDTO);

    /* 로그인할 때 필요한 ID */
    LoginUserDTO findByUserId(String userId);

    /* 로그인한 정보 출력 */
    LoginUserDTO findByLoginId(String loginUserId);

}
