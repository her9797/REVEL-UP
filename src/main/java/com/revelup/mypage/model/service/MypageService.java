package com.revelup.mypage.model.service;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.mypage.model.dao.MypageMapper;
import com.revelup.pay.model.dto.PayDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MypageService {

    private final MypageMapper mypageMapper;

    public MypageService(MypageMapper mypageMapper) {
        this.mypageMapper = mypageMapper;
    }

    // 상세내역
    public PayDTO selectOne(int plgCode) {
        System.out.println("plgCode : " + plgCode);
        PayDTO plgByOne = mypageMapper.selectOne(plgCode);
        System.out.println("plgByOne : " + plgByOne);
        return plgByOne;
    }

    // 후원한 펀딩
    public List<PayDTO> selectAllPlgList(String userId) {
        System.out.println("userID : " + userId);
        List<PayDTO> payList = mypageMapper.selectAllPlgList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }

    // 후원철회 펀딩
    public List<PayDTO> selectRefundList(String userId) {
        System.out.println("userID : " + userId);
        List<PayDTO> payList = mypageMapper.selectRefundList(userId);
        System.out.println("payList : " + payList);
        return payList;
    }

    // 미달성 펀딩
//    public List<PayDTO> selectFailFndList(String userId) {
//        System.out.println("userID : " + userId);
//        List<PayDTO> payList = mypageMapper.selectFailFndList(userId);
//        System.out.println("payList : " + payList);
//        return payList;
//    }



    public List<FundingInfoDTO> sttrFndPro(int fndCode) {
        return mypageMapper.sttrFndPro(fndCode);
    }


}
