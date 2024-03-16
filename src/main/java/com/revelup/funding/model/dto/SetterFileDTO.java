package com.revelup.funding.model.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SetterFileDTO implements java.io.Serializable {

    private String userId;
    private int siFileCode; // 세터 파일 코드
    private String siFileLoc; // 세터 파일 저장 경로
    private String siOrgFile; // 세터 파일 기존 파일명
    private String siSaveFile; // 세터 파일 저장 파일명
    private String siFileDiv; // 세터 파일 구분
    private int siFileAttached; // 세터 파일 존재 유무

}
