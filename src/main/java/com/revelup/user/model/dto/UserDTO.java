package com.revelup.user.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class UserDTO implements java.io.Serializable{

    private String userId;
    private String userName;
    private String userPw;
    private String userPhone;
    private String userAdd;
    private String userEmail;
    private String userRole;
    private Date userWddt;

    public UserDTO() {
    }

    public UserDTO(String userId, String userName, String userPw, String userPhone, String userAdd, String userEmail, String userRole) {
        this.userId = userId;
        this.userName = userName;
        this.userPw = userPw;
        this.userPhone = userPhone;
        this.userAdd = userAdd;
        this.userEmail = userEmail;
        this.userRole = userRole;
    }
}
