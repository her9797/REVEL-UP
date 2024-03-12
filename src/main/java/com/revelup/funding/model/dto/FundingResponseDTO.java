package com.revelup.funding.model.dto;

public class FundingResponseDTO implements java.io.Serializable {
    private String message; // 성공 또는 실패 메시지
    private FundingFileDTO fundingFileDTO;
    private FundingInfoDTO fundingInfoDTO;
    private GiftDTO giftDTO;
    private SetterFileDTO setterFileDTO;
    private SetterInfoDTO setterInfoDTO;

    public FundingResponseDTO() {
    }

    public FundingResponseDTO(String message, FundingFileDTO fundingFileDTO, FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterFileDTO setterFileDTO, SetterInfoDTO setterInfoDTO) {
        this.message = message;
        this.fundingFileDTO = fundingFileDTO;
        this.fundingInfoDTO = fundingInfoDTO;
        this.giftDTO = giftDTO;
        this.setterFileDTO = setterFileDTO;
        this.setterInfoDTO = setterInfoDTO;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public FundingFileDTO getFundingFileDTO() {
        return fundingFileDTO;
    }

    public void setFundingFileDTO(FundingFileDTO fundingFileDTO) {
        this.fundingFileDTO = fundingFileDTO;
    }

    public FundingInfoDTO getFundingInfoDTO() {
        return fundingInfoDTO;
    }

    public void setFundingInfoDTO(FundingInfoDTO fundingInfoDTO) {
        this.fundingInfoDTO = fundingInfoDTO;
    }

    public GiftDTO getGiftDTO() {
        return giftDTO;
    }

    public void setGiftDTO(GiftDTO giftDTO) {
        this.giftDTO = giftDTO;
    }

    public SetterFileDTO getSetterFileDTO() {
        return setterFileDTO;
    }

    public void setSetterFileDTO(SetterFileDTO setterFileDTO) {
        this.setterFileDTO = setterFileDTO;
    }

    public SetterInfoDTO getSetterInfoDTO() {
        return setterInfoDTO;
    }

    public void setSetterInfoDTO(SetterInfoDTO setterInfoDTO) {
        this.setterInfoDTO = setterInfoDTO;
    }

    @Override
    public String toString() {
        return "FundingResponseDTO{" +
                "message='" + message + '\'' +
                ", fundingFileDTO=" + fundingFileDTO +
                ", fundingInfoDTO=" + fundingInfoDTO +
                ", giftDTO=" + giftDTO +
                ", setterFileDTO=" + setterFileDTO +
                ", setterInfoDTO=" + setterInfoDTO +
                '}';
    }




}
