package com.revelup.auth.model.service;

import com.revelup.auth.model.AuthDetails;
import com.revelup.user.model.dto.LoginUserDTO;
import com.revelup.user.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

        LoginUserDTO login = userService.findByUserId(userId);

        if(Objects.isNull(login)) {
            throw new UsernameNotFoundException("해당하는 회원 정보가 존재하지 않습니다.");
        }

        return new AuthDetails(login);
    }

}
