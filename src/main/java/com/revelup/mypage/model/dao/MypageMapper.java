package com.revelup.mypage.model.dao;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.pay.model.dto.PayDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MypageMapper {
    List<FundingInfoDTO> sttrFndPro(int fndCode);


//    실패
    List<PayDTO> selectAllPlgList();

}
