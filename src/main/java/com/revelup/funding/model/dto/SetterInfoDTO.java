package com.revelup.funding.model.dto;


import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class SetterInfoDTO implements java.io.Serializable {
    private String userId;      // 세터 아이디
    private String sttrCompany; // 상호
    private String sttrName;    // 대표자명
    private long sttrRegistNo;  // 사업자 등록 번호
    private String sttrBank;    // 은행
    private String sttrAccNo;   // 계좌번호
    private String sttrAccHolder;   // 예금주
    private MultipartFile businessCertif; // 사업자 등록증 1개 파일
    private MultipartFile sttrImg; // 세터 프로필 1개 이미지
}
