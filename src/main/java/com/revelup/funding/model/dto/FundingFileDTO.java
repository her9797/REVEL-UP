package com.revelup.funding.model.dto;

public class FundingFileDTO implements java.io.Serializable {

    private int fileCode; // 파일 코드
    private int fndCode; // 펀딩 코드
    private String fndFileLoc; // 파일 저장 경로
    private String fndOrgFile; // 기존 파일명
    private String fndSaveFile; // 저장 파일명
    private String fileDiv; // 파일 구분

    public FundingFileDTO() {
    }

    public FundingFileDTO(int fileCode, int fndCode, String fndFileLoc, String fndOrgFile, String fndSaveFile, String fileDiv) {
        this.fileCode = fileCode;
        this.fndCode = fndCode;
        this.fndFileLoc = fndFileLoc;
        this.fndOrgFile = fndOrgFile;
        this.fndSaveFile = fndSaveFile;
        this.fileDiv = fileDiv;
    }

    public int getFileCode() {
        return fileCode;
    }

    public void setFileCode(int fileCode) {
        this.fileCode = fileCode;
    }

    public int getFndCode() {
        return fndCode;
    }

    public void setFndCode(int fndCode) {
        this.fndCode = fndCode;
    }

    public String getFndFileLoc() {
        return fndFileLoc;
    }

    public void setFndFileLoc(String fndFileLoc) {
        this.fndFileLoc = fndFileLoc;
    }

    public String getFndOrgFile() {
        return fndOrgFile;
    }

    public void setFndOrgFile(String fndOrgFile) {
        this.fndOrgFile = fndOrgFile;
    }

    public String getFndSaveFile() {
        return fndSaveFile;
    }

    public void setFndSaveFile(String fndSaveFile) {
        this.fndSaveFile = fndSaveFile;
    }

    public String getFileDiv() {
        return fileDiv;
    }

    public void setFileDiv(String fileDiv) {
        this.fileDiv = fileDiv;
    }

    @Override
    public String toString() {
        return "FundingFileDTO{" +
                "fileCode=" + fileCode +
                ", fndCode=" + fndCode +
                ", fndFileLoc='" + fndFileLoc + '\'' +
                ", fndOrgFile='" + fndOrgFile + '\'' +
                ", fndSaveFile='" + fndSaveFile + '\'' +
                ", fileDiv='" + fileDiv + '\'' +
                '}';
    }
}
