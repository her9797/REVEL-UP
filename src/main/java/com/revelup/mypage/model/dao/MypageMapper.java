package com.revelup.mypage.model.dao;

import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.pay.model.dto.PayCompletionDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MypageMapper {

    // 후원한 펀딩
    List<PayCompletionDTO> selectAllPlgList(String userId);

    // 후원철회 펀딩
    List<PayCompletionDTO> selectRefundList(String userId);

    // 미달성 펀딩
    List<PayCompletionDTO> selectFailFndList(String userId);


//    List<FundingInfoDTO> sttrFndPro(int fndCode);


    PayCompletionDTO selectOne(int plgCode);

    List<FundingInfoDTO> allFndList();

}
