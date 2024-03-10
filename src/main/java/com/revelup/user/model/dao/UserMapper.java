package com.revelup.user.model.dao;

import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

    /* 회원가입  */
    int signup(UserDTO userDTO);

    /* 로그인 */
    LoginUserDTO findByUserId(String userId);

    /* 로그인한 정보 */
    LoginUserDTO findByLoginId(String loginUserId);

    UserDTO checkUserId(@Param("userId") String userId);
}
