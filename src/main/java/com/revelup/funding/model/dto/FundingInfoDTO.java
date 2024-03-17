package com.revelup.funding.model.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
/** 펀딩DTO 메소드*/
public class FundingInfoDTO implements java.io.Serializable {
    private int fndCode; // 펀딩 코드
    private String userId; // 아이디
    private String fndName; // 펀딩명
    private String fndEndDt; // 펀딩 종료 일자
    private int goalAmt; // 목표 금액
    private String fndDescr; // 펀딩 스토리
    private int successAmt; // 달성액
    private String fndDelYn; // 펀딩 삭제 여부
    private String fndPrgStat; // 펀딩 진행 상태
    private String fndInsertDttm; // 펀딩 심사 등록 일시

    private int fileCode; // 파일 코드
    private String fndFileLoc; // 파일 저장 경로
    private String fndOrgFile; // 기존 파일명
    private String fndSaveFile; // 저장 파일명
    private String fileDiv; // 파일 구분
    private int fileAttached; // 파일 존재 유무
    private List<MultipartFile> fundingFile; // 파일 저장
    private MultipartFile thumbnailImage;  // 전체 펀딩 목록에서 보여지는 1개의 썸네일
    private List<MultipartFile> mainThumbnail;   // 상세 목록 조회에서 보여지는 5개의 썸네일
    private MultipartFile detailImage;     // 상세 페이지 하단 1개의 이미지

    private int giftPrice; // 선물 금액
    private String giftName; // 선물명
    private int giftProdQty; // 선물 생산 가능 수량

    private int siFileCode; // 세터 파일 코드
    private String siFileLoc; // 세터 파일 저장 경로
    private String siOrgFile; // 세터 파일 기존 파일명
    private String siSaveFile; // 세터 파일 저장 파일명
    private String siFileDiv; // 세터 파일 구분
    private int siFileAttached; // 세터 파일 존재 유무
    private List<MultipartFile> sttrFile; // 파일 저장
    private MultipartFile businessCertif; // 사업자 등록증 1개 파일
    private MultipartFile sttrImg; // 세터 프로필 1개 이미지

    private String sttrCompany; // 상호
    private String sttrName;    // 대표자명
    private long sttrRegistNo;  // 사업자 등록 번호
    private String sttrBank;    // 은행
    private String sttrAccNo;   // 계좌번호
    private String sttrAccHolder;   // 예금주

    private Date auditApprDt;       // 심사 승인 일자
    private String auditStat;       // 심사 상태
}
