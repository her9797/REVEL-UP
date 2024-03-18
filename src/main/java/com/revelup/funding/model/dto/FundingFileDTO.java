package com.revelup.funding.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@ToString
public class FundingFileDTO implements java.io.Serializable {

    private int fileCode; // 파일 코드

    private int fndCode; // 펀딩 코드

    private String fndFileLoc; // 파일 저장 경로

    private String fndOrgFile; // 기존 파일명

    private String fndSaveFile; // 저장 파일명

    private String fileDiv; // 파일 구분





}
