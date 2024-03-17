package com.revelup.funding.model.dto;

import lombok.*;

import java.sql.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class InquiryDTO implements java.io.Serializable {

    private int inqCode;            // 문의코드
    private int fndCode;            // 펀딩코드
    private String inqTitle;        // 문의제목
    private String inqCont;         // 문의내용
    private Date inqInsertDttm;     // 문의 등록일
    private String inqEmail;        // 문의이메일
    private String inqAns;          // 문의답변

}
