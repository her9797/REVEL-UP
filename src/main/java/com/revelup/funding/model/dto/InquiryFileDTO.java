package com.revelup.funding.model.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class InquiryFileDTO implements java.io.Serializable {

    private int fileCode;
    private int inqCode;
    private String inqFileLoc;
    private String inqOrgFile;
    private String inqSaveFile;



}
