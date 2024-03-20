package com.revelup.common;

public enum UserRole {

    게터("게터"),

    세터("세터"),
    매니저("매니저"),
    회원탈퇴("회원탈퇴");

    private String role;

    UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    @Override
    public String toString() {
        return "UserRole{" +
                "role='" + role + '\'' +
                '}';
    }
}






