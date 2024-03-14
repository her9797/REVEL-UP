package com.revelup.mypage.model.service;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.mypage.model.dao.MypageMapper;
import com.revelup.pay.model.dto.PayCompletionDTO;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Log4j2
public class MypageService {

    private final MypageMapper mypageMapper;

    public MypageService(MypageMapper mypageMapper) {
        this.mypageMapper = mypageMapper;
    }

    // 후원한 펀딩
    public List<PayCompletionDTO> selectAllPlgList(String userId) {
        System.out.println("userID : " + userId);
        List<PayCompletionDTO> payList = mypageMapper.selectAllPlgList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }
    // 후원내역 상세조회
    public PayCompletionDTO selectOne(int plgCode) {
        System.out.println("plgCode : " + plgCode);
//        PayCompletionDTO plgByOne = mypageMapper.selectOne(plgCode);
//        System.out.println("plgByOne : " + plgByOne);
//        return plgByOne;
        return mypageMapper.selectOne(plgCode);
    }
    // 후원철회 펀딩
    public List<PayCompletionDTO> selectRefundList(String userId) {
        System.out.println("userID : " + userId);
        List<PayCompletionDTO> payList = mypageMapper.selectRefundList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }

    // 미달성 펀딩
    public List<PayCompletionDTO> selectFailFndList(String userId) {
        System.out.println("userID : " + userId);
        List<PayCompletionDTO> payList = mypageMapper.selectFailFndList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }



    // 펀딩내역 조회
    public List<FundingInfoDTO> allFndList() {
        List<FundingInfoDTO> fndList = mypageMapper.allFndList();
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
    public List<PayCompletionDTO> plgList(int fndCode) {
        System.out.println("fndCode : " + fndCode);
        log.info(fndCode);
        List<PayCompletionDTO> plgList = mypageMapper.plgList(fndCode);
        log.info(plgList);
        return plgList;
    }

    public int updateTrackingNo(DeliveryDTO deliveryDTO) {

        int result = mypageMapper.updateTrackingNo(deliveryDTO);

        return result;
    }

//    public void updateTrackingNum(DeliveryDTO deliveryDTO) {
//        mypageMapper.updateTrackingNum(deliveryDTO);
//    }


//    public List<FundingInfoDTO> sttrFndPro(int fndCode) {
////        return mypageMapper.sttrFndPro(fndCode);
//        return new ArrayList<>();
//    }

}
