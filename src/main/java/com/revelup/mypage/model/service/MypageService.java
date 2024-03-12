package com.revelup.mypage.model.service;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.mypage.model.dao.MypageMapper;
import com.revelup.pay.model.dto.PayCompletionDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
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

    public PayCompletionDTO selectOnePlg(String userId) {
        System.out.println("userID : " + userId);
        PayCompletionDTO plgByOne = mypageMapper.selectOnePlg(userId);
        System.out.println("plgByOne : " + plgByOne);
        return plgByOne;
    }

    public List<FundingInfoDTO> sttrFndPro(int fndCode) {
//        return mypageMapper.sttrFndPro(fndCode);
        return new ArrayList<>();
    }

}
