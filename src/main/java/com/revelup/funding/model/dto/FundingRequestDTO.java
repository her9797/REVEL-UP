package com.revelup.funding.model.dto;

public class FundingRequestDTO implements java.io.Serializable {
    private FundingFileDTO fundingFileDTO;
    private FundingInfoDTO fundingInfoDTO;
    private GiftDTO giftDTO;
    private SetterFileDTO setterFileDTO;
    private SetterInfoDTO setterInfoDTO;

    public FundingRequestDTO() {
    }

    public FundingRequestDTO(FundingFileDTO fundingFileDTO, FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterFileDTO setterFileDTO, SetterInfoDTO setterInfoDTO) {
        this.fundingFileDTO = fundingFileDTO;
        this.fundingInfoDTO = fundingInfoDTO;
        this.giftDTO = giftDTO;
        this.setterFileDTO = setterFileDTO;
        this.setterInfoDTO = setterInfoDTO;
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
        return "FundingRequestDTO{" +
                "fundingFileDTO=" + fundingFileDTO +
                ", fundingInfoDTO=" + fundingInfoDTO +
                ", giftDTO=" + giftDTO +
                ", setterFileDTO=" + setterFileDTO +
                ", setterInfoDTO=" + setterInfoDTO +
                '}';
    }
}
