package com.revelup.funding.model.dto;

public class GiftDTO implements java.io.Serializable {

    private int fndCode; // 펀딩 코드
    private int giftPrice; // 선물 금액
    private String giftName; // 선물명
    private int giftProdQty; // 선물 생산 가능 수량

    private FundingInfoDTO fndNo;

    public GiftDTO() {
    }

    public GiftDTO(int fndCode, int giftPrice, String giftName, int giftProdQty) {
        this.fndCode = fndCode;
        this.giftPrice = giftPrice;
        this.giftName = giftName;
        this.giftProdQty = giftProdQty;
    }

    public int getFndCode() {
        return fndCode;
    }

    public void setFndCode(int fndCode) {
        this.fndCode = fndCode;
    }

    public int getGiftPrice() {
        return giftPrice;
    }

    public void setGiftPrice(int giftPrice) {
        this.giftPrice = giftPrice;
    }

    public String getGiftName() {
        return giftName;
    }

    public void setGiftName(String giftName) {
        this.giftName = giftName;
    }

    public int getGiftProdQty() {
        return giftProdQty;
    }

    public void setGiftProdQty(int giftProdQty) {
        this.giftProdQty = giftProdQty;
    }

    @Override
    public String toString() {
        return "GiftDTO{" +
                "fndCode=" + fndCode +
                ", giftPrice=" + giftPrice +
                ", giftName='" + giftName + '\'' +
                ", giftProdQty=" + giftProdQty +
                '}';
    }
}
