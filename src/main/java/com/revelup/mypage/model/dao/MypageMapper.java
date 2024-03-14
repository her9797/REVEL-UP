package com.revelup.mypage.model.dao;

import com.revelup.funding.model.dto.DeliveryDTO;
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


    // 나의 후원내역 상세조회
    PayCompletionDTO selectOne(int plgCode);

    // 세터 펀딩목록
    List<FundingInfoDTO> allFndList();

    // 세터 펀딩내역 상세조회
    FundingInfoDTO sttrSelectOneFnd(int fndCode);

    List<PayCompletionDTO> plgList(int fndCode);

    int updateTrackingNo(DeliveryDTO deliveryDTO);


//    void updateTrackingNum(DeliveryDTO deliveryDTO);
}
