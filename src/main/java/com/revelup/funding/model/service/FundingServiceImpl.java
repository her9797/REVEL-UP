package com.revelup.funding.model.service;

import com.revelup.funding.model.dao.FundingMapper;
import com.revelup.funding.model.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundingServiceImpl implements FundingService {

    private final FundingMapper mapper;

    @Autowired
    public FundingServiceImpl(FundingMapper mapper) {
        this.mapper = mapper;
    }


    //    @Override
//    public void insertFunding(FundingFileDTO fundingFileDTO, FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterFileDTO setterFileDTO, SetterInfoDTO setterInfoDTO) {
//        mapper.insertSetterInfo(setterInfoDTO);
//        mapper.insertFundingInfo(fundingInfoDTO);
//        mapper.insertFundingFileInfo(fundingFileDTO);
//        mapper.insertSetterInfoFile(setterFileDTO);
//        mapper.insertGift(giftDTO);
//    }
    @Override
    public void insertFunding(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterInfoDTO setterInfoDTO) {
        mapper.insertSetterInfo(setterInfoDTO);
        mapper.insertFundingInfo(fundingInfoDTO);
        mapper.insertGift(giftDTO);
    }

    //    requestdto에서 구분값을 가지고있으면 인서트를 할지안할지 조회하는 로직이 있어야함. 있으면 신규 insert가 아니라 update.


    @Override
    public List<FundingInfoDTO> selectAllFunding() {
        return mapper.selectAllFunding();
    }

//    @Override
//    public void updateViews(int fndCode) {
//        mapper.updateViews(fndCode);
//    }

    @Override
    public FundingInfoDTO findByCode(int fndCode) {
        return mapper.findByCode(fndCode);
    }








}
