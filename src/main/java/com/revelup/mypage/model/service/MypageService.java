package com.revelup.mypage.model.service;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.InquiryDTO;
import com.revelup.funding.model.dto.InquiryFileDTO;
import com.revelup.mypage.model.dao.MypageMapper;
import com.revelup.pay.model.dto.PayDTO;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class MypageService {

    private final MypageMapper mypageMapper;

    private List<InquiryFileDTO> inquiryFiles;
    private InquiryDTO  inquiryDTO;

    public MypageService(MypageMapper mypageMapper) {
        this.mypageMapper = mypageMapper;
    }

    // 운송장번호 UPDATE
    public int updateTrackingNo(DeliveryDTO deliveryDTO) {

        int result = mypageMapper.updateTrackingNo(deliveryDTO);

        return result;
    }


    // 후원한 펀딩
    public List<PayDTO> selectAllPlgList(String userId) {
        System.out.println("userID : " + userId);
        List<PayDTO> payList = mypageMapper.selectAllPlgList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }

    // 후원내역 상세조회1
    public PayDTO selectOne(int plgCode) {
        System.out.println("plgCode : " + plgCode);
//        PayCompletionDTO plgByOne = mypageMapper.selectOne(plgCode);
//        System.out.println("plgByOne : " + plgByOne);
//        return plgByOne;
        return mypageMapper.selectOne(plgCode);
    }

    // 후원내역 상세조회2
    public PayDTO selectByOne(int plgCode) {
        System.out.println("plgCode : " + plgCode);
//        PayCompletionDTO plgByOne = mypageMapper.selectOne(plgCode);
//        System.out.println("plgByOne : " + plgByOne);
//        return plgByOne;
        return mypageMapper.selectByOne(plgCode);
    }


    // 후원철회 펀딩
    public List<PayDTO> selectRefundList(String userId) {
        System.out.println("userID : " + userId);
        List<PayDTO> payList = mypageMapper.selectRefundList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }

    // 미달성 펀딩
    public List<PayDTO> selectFailFndList(String userId) {
        System.out.println("userID : " + userId);
        List<PayDTO> payList = mypageMapper.selectFailFndList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }



    // 펀딩내역 조회
    public List<FundingInfoDTO> allFndList(String userId) {
        List<FundingInfoDTO> fndList = mypageMapper.allFndList(userId);
        System.out.println("fndList : " + fndList);
        return fndList;

    }

    // 펀딩내역 상세조회(펀딩)
    public FundingInfoDTO sttrSelectOneFnd(int fndCode) {
        System.out.println("fndCode : " + fndCode);
        log.info(fndCode);
        FundingInfoDTO fndByOne = mypageMapper.sttrSelectOneFnd(fndCode);
        System.out.println("fndByOne : " + fndByOne);
        log.info(fndByOne);
        return fndByOne;

    }

    // 펀딩내역 상세조회(후원자)
    public List<PayDTO> plgList(int fndCode) {
        System.out.println("fndCode : " + fndCode);
        log.info(fndCode);
        List<PayDTO> plgList = mypageMapper.plgList(fndCode);
        log.info(plgList);
        return plgList;
    }

    // 심사대기중 펀딩
    public List<FundingInfoDTO> audReadyList(String userId) {

        List<FundingInfoDTO> audReadyList = mypageMapper.audReadyList(userId);
        System.out.println("audReadyList : " + audReadyList);
        return audReadyList;
    }

    // 반려된 펀딩
    public List<FundingInfoDTO> refuseList(String userId) {
        List<FundingInfoDTO> refuseList = mypageMapper.refuseList(userId);
        System.out.println("refuseList : " + refuseList);
        return refuseList;
    }

    // 종료된 펀딩
    public List<FundingInfoDTO> finishList(String userId) {
        List<FundingInfoDTO> finishList = mypageMapper.finishList(userId);
        System.out.println("finishList : " + finishList);
        return finishList;
    }

    // 펀딩삭제
    public void deleteFnd(int fndCode) {
        System.out.println("fndCode : " + fndCode);
        log.info("fndCode : " + fndCode);

        mypageMapper.deletePlg(fndCode);
        mypageMapper.deleteGift(fndCode);
        mypageMapper.deleteFndFile(fndCode);
//        mypageMapper.deleteRpt(fndCode);
        mypageMapper.deleteAud(fndCode);
        mypageMapper.deleteFnd(fndCode);
    }

    // 운송장 등록1
    public FundingInfoDTO successAmt(int successAmt) {

        System.out.println("successAmt : " + successAmt);
        log.info(successAmt);
        FundingInfoDTO fndInfo = mypageMapper.successAmt(successAmt);
        System.out.println("fndInfo : " + fndInfo);
        log.info(fndInfo);
        return fndInfo;
    }

    // 운송장 등록2
    public int getSuccessAmtByFndCode(int fndCode) {
        return mypageMapper.getSuccessAmtByFndCode(fndCode);
    }


    // 반려된 펀딩 문의 등록
    public void insertInq(int fndCode, InquiryDTO inquiryDTO, InquiryFileDTO inquiryFileDTO) {

        inquiryDTO.setInqCode(fndCode);
        mypageMapper.insertInq(inquiryDTO);

        int inqCode = inquiryDTO.getInqCode();

        inquiryFileDTO.setInqCode(inqCode);

        mypageMapper.insertInqFile(inquiryFileDTO);

//        handleInqFileUpload("detailImage", "D", inquiryFileDTO.getDetailImage(), fndCode);
    }

    public FundingInfoDTO inqFnd(int fndCode) {

        FundingInfoDTO inqFnd = mypageMapper.inqFnd(fndCode);

        return inqFnd;

    }

    public FundingInfoDTO sttrOneFnd(int fndCode) {
        System.out.println("fndCode : " + fndCode);
        log.info(fndCode);
        FundingInfoDTO sttrOneFnd = mypageMapper.sttrOneFnd(fndCode);
        System.out.println("sttrOneFnd : " + sttrOneFnd);
        log.info(sttrOneFnd);
        return sttrOneFnd;
    }
}
