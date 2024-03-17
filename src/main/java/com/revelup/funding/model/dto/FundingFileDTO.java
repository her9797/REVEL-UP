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

    private MultipartFile thumbnailImage;  // 전체 펀딩 목록에서 보여지는 1개의 썸네일

    private List<MultipartFile> mainThumbnail;   // 상세 목록 조회에서 보여지는 5개의 썸네일

    private MultipartFile detailImage;     // 상세 페이지 하단 1개의 이미지








}
