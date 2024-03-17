package com.revelup.funding.model.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SetterFileDTO implements java.io.Serializable {

    private int siFileCode; // 세터 파일 코드
    private String userId;  // 유저 아이디
    private String siFileLoc; // 세터 파일 저장 경로
    private String siOrgFile; // 세터 파일 기존 파일명
    private String siSaveFile; // 세터 파일 저장 파일명
    private String siFileDiv; // 세터 파일 구분
    private MultipartFile businessCertif; // 사업자 등록증 1개 파일
    private MultipartFile sttrImg; // 세터 프로필 1개 이미지


}
