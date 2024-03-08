package com.revelup.notice.model.dto;

import java.sql.Date;

public class NoticeDTO implements java.io.Serializable {

    private int ntcCode;
    private String ntcTitle;
    private String ntcCont;
    private Date ntcInsertDt;

    public NoticeDTO() {}

    public NoticeDTO(int ntcCode, String ntcTitle, String ntcCont, Date ntcInsertDt) {
        this.ntcCode = ntcCode;
        this.ntcTitle = ntcTitle;
        this.ntcCont = ntcCont;
        this.ntcInsertDt = ntcInsertDt;
    }

    public NoticeDTO(int ntcCode, String ntcTitle, Date ntcInsertDt) {
        this.ntcCode = ntcCode;
        this.ntcTitle = ntcTitle;
        this.ntcInsertDt = ntcInsertDt;
    }

    public NoticeDTO(String ntcTitle, Date ntcInsertDt, String ntcCont) {
        this.ntcTitle = ntcTitle;
        this.ntcInsertDt = ntcInsertDt;
        this.ntcCont = ntcCont;
    }

    public NoticeDTO(String ntcCont) {
        this.ntcCont = ntcCont;
    }


    public int getNtcCode() {
        return ntcCode;
    }

    public void setNtcCode(int ntcCode) {
        this.ntcCode = ntcCode;
    }

    public String getNtcTitle() {
        return ntcTitle;
    }

    public void setNtcTitle(String ntcTitle) {
        this.ntcTitle = ntcTitle;
    }

    public String getNtcCont() {
        return ntcCont;
    }

    public void setNtcCont(String ntcCont) {
        this.ntcCont = ntcCont;
    }

    public Date getNtcInsertDt() {
        return ntcInsertDt;
    }

    public void setNtcInsertDt(Date ntcInsertDt) {
        this.ntcInsertDt = ntcInsertDt;
    }

    @Override
    public String toString() {
        return "NoticeDTO{" +
                "ntcCode=" + ntcCode +
                ", ntcTitle='" + ntcTitle + '\'' +
                ", ntcCont='" + ntcCont + '\'' +
                ", ntcInsertDt=" + ntcInsertDt +
                '}';
    }
}




