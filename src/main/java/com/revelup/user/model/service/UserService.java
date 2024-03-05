package com.revelup.user.model.service;

import com.revelup.user.model.dao.UserMapper;
import com.revelup.user.model.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
//@RequiredArgsConstructor  -> (final 이 대상임) 초기화하는 생성자 자동으로 해줌
public class UserService {

    private final UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }


    public void userSignUp(UserDTO userDTO) {
        userMapper.insertUser(userDTO);
    }
}
