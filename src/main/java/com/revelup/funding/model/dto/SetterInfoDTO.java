package com.revelup.funding.model.dto;

public class SetterInfoDTO implements java.io.Serializable {
    private String userId;      // 세터 아이디
    private String sttrCompany; // 상호
    private String sttrName;    // 대표자명
    private long sttrRegistNo;  // 사업자 등록 번호
    private String sttrBank;    // 은행
    private String sttrAccNo;   // 계좌번호
    private String sttrAccHolder;   // 예금주

    public SetterInfoDTO() {
    }

    public SetterInfoDTO(String userId, String sttrCompany, String sttrName, long sttrRegistNo, String sttrBank, String sttrAccNo, String sttrAccHolder) {
        this.userId = userId;
        this.sttrCompany = sttrCompany;
        this.sttrName = sttrName;
        this.sttrRegistNo = sttrRegistNo;
        this.sttrBank = sttrBank;
        this.sttrAccNo = sttrAccNo;
        this.sttrAccHolder = sttrAccHolder;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSttrCompany() {
        return sttrCompany;
    }

    public void setSttrCompany(String sttrCompany) {
        this.sttrCompany = sttrCompany;
    }

    public String getSttrName() {
        return sttrName;
    }

    public void setSttrName(String sttrName) {
        this.sttrName = sttrName;
    }

    public long getSttrRegistNo() {
        return sttrRegistNo;
    }

    public void setSttrRegistNo(long sttrRegistNo) {
        this.sttrRegistNo = sttrRegistNo;
    }

    public String getSttrBank() {
        return sttrBank;
    }

    public void setSttrBank(String sttrBank) {
        this.sttrBank = sttrBank;
    }

    public String getSttrAccNo() {
        return sttrAccNo;
    }

    public void setSttrAccNo(String sttrAccNo) {
        this.sttrAccNo = sttrAccNo;
    }

    public String getSttrAccHolder() {
        return sttrAccHolder;
    }

    public void setSttrAccHolder(String sttrAccHolder) {
        this.sttrAccHolder = sttrAccHolder;
    }

    @Override
    public String toString() {
        return "SetterInfoDTO{" +
                "userId='" + userId + '\'' +
                ", sttrCompany='" + sttrCompany + '\'' +
                ", sttrName='" + sttrName + '\'' +
                ", sttrRegistNo=" + sttrRegistNo +
                ", sttrBank='" + sttrBank + '\'' +
                ", sttrAccNo='" + sttrAccNo + '\'' +
                ", sttrAccHolder='" + sttrAccHolder + '\'' +
                '}';
    }


}
