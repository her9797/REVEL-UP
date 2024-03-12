package com.revelup.user.model.dto;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.revelup.common.UserRole;
import org.apache.catalina.User;


public class LoginUserDTO implements java.io.Serializable{


    private String userId;
    private String userName;
    private String userPw;
    private String userPhone;
    private String userAdd;
    private String userEmail;
    private UserRole userRole;

    public LoginUserDTO() {
    }

    public LoginUserDTO(String userId, String userName, String userPw, String userPhone, String userAdd, String userEmail, UserRole userRole) {
        this.userId = userId;
        this.userName = userName;
        this.userPw = userPw;
        this.userPhone = userPhone;
        this.userAdd = userAdd;
        this.userEmail = userEmail;
        this.userRole = userRole;
    }

    public List<String> getRole(){
        if (this.userRole.getRole().length() > 0) {
            return Arrays.asList(this.userRole.getRole().split(","));
        }
        return new ArrayList<>();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserAdd() {
        return userAdd;
    }

    public void setUserAdd(String userAdd) {
        this.userAdd = userAdd;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    @Override
    public String toString() {
        return "LoginUserDTO{" +
                "userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", userPw='" + userPw + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userAdd='" + userAdd + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userRole='" + userRole + '\'' +
                '}';
    }
}
