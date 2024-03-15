package com.revelup.audit.model.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AuditDecDTO implements java.io.Serializable {

    private int fndCode;            // 펀딩코드
    private String decEmail;        // 반려대상 이메일
    private String decReason;       // 반려 사유

}
