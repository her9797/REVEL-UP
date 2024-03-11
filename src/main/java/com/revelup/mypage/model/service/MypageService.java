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

//    public List<PayDTO> selectAllPagList() {
//        return mypageMapper.selectAllPlgList();
//    }

    public List<FundingInfoDTO> sttrFndPro(int fndCode) {
        return mypageMapper.sttrFndPro(fndCode);
    }


//   실패
    public List<PayDTO> selectAllPlgList(String userId) {
        System.out.println("userID : " + userId);
        List<PayDTO> payList = mypageMapper.selectAllPlgList();
        System.out.println("payList : " + payList);
        return payList;
    }
}
