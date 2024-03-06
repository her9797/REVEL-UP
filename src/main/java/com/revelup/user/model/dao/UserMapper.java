package com.revelup.user.model.dao;

import com.revelup.user.model.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    void signupUser(UserDTO userDTO);
}
