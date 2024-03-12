package com.revelup.funding.model.dto;

public class SetterFileDTO implements java.io.Serializable {

    private String userId;
    private String siFileLoc;
    private String siOrgFile;
    private String siSaveFile;

    public SetterFileDTO() {
    }

    public SetterFileDTO(String userId, String siFileLoc, String siOrgFile, String siSaveFile) {
        this.userId = userId;
        this.siFileLoc = siFileLoc;
        this.siOrgFile = siOrgFile;
        this.siSaveFile = siSaveFile;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSiFileLoc() {
        return siFileLoc;
    }

    public void setSiFileLoc(String siFileLoc) {
        this.siFileLoc = siFileLoc;
    }

    public String getSiOrgFile() {
        return siOrgFile;
    }

    public void setSiOrgFile(String siOrgFile) {
        this.siOrgFile = siOrgFile;
    }

    public String getSiSaveFile() {
        return siSaveFile;
    }

    public void setSiSaveFile(String siSaveFile) {
        this.siSaveFile = siSaveFile;
    }

    @Override
    public String toString() {
        return "SetterFileDTO{" +
                "userId='" + userId + '\'' +
                ", siFileLoc='" + siFileLoc + '\'' +
                ", siOrgFile='" + siOrgFile + '\'' +
                ", siSaveFile='" + siSaveFile + '\'' +
                '}';
    }


}
