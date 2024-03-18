package com.revelup.mypage.model.dao;

import com.revelup.funding.model.dto.DeliveryDTO;
import com.revelup.funding.model.dto.FundingInfoDTO;
import com.revelup.funding.model.dto.InquiryDTO;
import com.revelup.funding.model.dto.InquiryFileDTO;
import com.revelup.pay.model.dto.PayDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MypageMapper {
    // 운송장번호
    int updateTrackingNo(DeliveryDTO deliveryDTO);

    // 후원한 펀딩
    List<PayDTO> selectAllPlgList(String userId);

    // 후원철회 펀딩
    List<PayDTO> selectRefundList(String userId);

    // 미달성 펀딩
    List<PayDTO> selectFailFndList(String userId);


//    List<FundingInfoDTO> sttrFndPro(int fndCode);


    // 나의 후원내역 상세조회
    PayDTO selectOne(int plgCode);

    // 세터 진행중인 펀딩
    List<FundingInfoDTO> allFndList();

    // 세터 진행중인 펀딩 상세조회(펀딩)
    FundingInfoDTO sttrSelectOneFnd(int fndCode);

    // 세터 진행중인 펀딩 상세조회(후원자)
    List<PayDTO> plgList(int fndCode);

    // 세터 심사대기중인 펀딩
    List<FundingInfoDTO> audReadyList();

    // 세터 반려된 펀딩
    List<FundingInfoDTO> refuseList();

    // 세터 종료된 펀딩
    List<FundingInfoDTO> finishList();

    PayDTO selectByOne(int plgCode);

    void deleteFnd(int fndCode);

    void deletePlg(int fndCode);

    void deleteGift(int fndCode);

//    void deleteFndFile(int fndCode);

//    void deleteRpt(int fndCode);

    void deleteAud(int fndCode);

    FundingInfoDTO successAmt(int successAmt);

    int getSuccessAmtByFndCode(int fndCode);

    void insertInq(InquiryDTO inquiryDTO);

    void insertInqFile(InquiryFileDTO inquiryFileDTO);

    FundingInfoDTO inqFnd(int fndCode);

    FundingInfoDTO sttrOneFnd(int fndCode);


//    int deleteFndList(int fndCode);

//    void updateTrackingNum(DeliveryDTO deliveryDTO);
}
