package com.revelup.funding.model.dto;

import java.util.Date;

/** 펀딩DTO 메소드*/
public class FundingInfoDTO implements java.io.Serializable {
    private int fndCode; // 펀딩 코드
    private String userId; // 아이디
    private String fndName; // 펀딩명
    private Date fndEndDt; // 펀딩 종료 일자
    private int goalAmt; // 목표 금액
    private String fndDescr; // 펀딩 스토리
    private int successAmt; // 달성액
    private String fndDelYn; // 펀딩 삭제 여부
    private String fndPrgStat; // 펀딩 진행 상태

    public FundingInfoDTO() {
    }

    public int getFndCode() {
        return fndCode;
    }

    public void setFndCode(int fndCode) {
        this.fndCode = fndCode;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFndName() {
        return fndName;
    }

    public void setFndName(String fndName) {
        this.fndName = fndName;
    }

    public Date getFndEndDt() {
        return fndEndDt;
    }

    public void setFndEndDt(Date fndEndDt) {
        this.fndEndDt = fndEndDt;
    }

    public int getGoalAmt() {
        return goalAmt;
    }

    public void setGoalAmt(int goalAmt) {
        this.goalAmt = goalAmt;
    }

    public String getFndDescr() {
        return fndDescr;
    }

    public void setFndDescr(String fndDescr) {
        this.fndDescr = fndDescr;
    }

    public int getSuccessAmt() {
        return successAmt;
    }

    public void setSuccessAmt(int successAmt) {
        this.successAmt = successAmt;
    }

    public String getFndDelYn() {
        return fndDelYn;
    }

    public void setFndDelYn(String fndDelYn) {
        this.fndDelYn = fndDelYn;
    }

    public String getFndPrgStat() {
        return fndPrgStat;
    }

    public void setFndPrgStat(String fndPrgStat) {
        this.fndPrgStat = fndPrgStat;
    }

    public FundingInfoDTO(int fndCode, String userId, String fndName, Date fndEndDt, int goalAmt, String fndDescr, int successAmt, String fndDelYn, String fndPrgStat) {
        this.fndCode = fndCode;
        this.userId = userId;
        this.fndName = fndName;
        this.fndEndDt = fndEndDt;
        this.goalAmt = goalAmt;
        this.fndDescr = fndDescr;
        this.successAmt = successAmt;
        this.fndDelYn = fndDelYn;
        this.fndPrgStat = fndPrgStat;
    }

    @Override
    public String toString() {
        return "FundingInfoDTO{" +
                "fndCode=" + fndCode +
                ", userId='" + userId + '\'' +
                ", fndName='" + fndName + '\'' +
                ", fndEndDt=" + fndEndDt +
                ", goalAmt=" + goalAmt +
                ", fndDescr='" + fndDescr + '\'' +
                ", successAmt=" + successAmt +
                ", fndDelYn='" + fndDelYn + '\'' +
                ", fndPrgStat='" + fndPrgStat + '\'' +
                '}';
    }
}
