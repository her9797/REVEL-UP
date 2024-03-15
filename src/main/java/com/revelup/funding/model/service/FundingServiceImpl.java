package com.revelup.funding.model.service;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.funding.model.dao.FundingMapper;
import com.revelup.funding.model.dto.*;
import com.revelup.user.model.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class FundingServiceImpl implements FundingService {

    private final FundingMapper mapper;

    @Autowired
    public FundingServiceImpl(FundingMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    @Transactional
    public void insertFunding(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterInfoDTO setterInfoDTO,AuditDTO auditDTO) throws IOException {
        mapper.insertSetterInfo(setterInfoDTO);
        mapper.insertFundingInfo(fundingInfoDTO);
        int fndCode = fundingInfoDTO.getFndCode();

        giftDTO.setFndCode(fndCode);// GiftDTO에 방금 직전에 동시에 생성된 펀딩코드를 담아줌.
        mapper.insertGift(giftDTO);

        /* 심사도 동시에 insert */
        auditDTO.setFndCode(fndCode);
        mapper.insertAudit(auditDTO);


        // 파일만 따로 가져오기
        for (MultipartFile fundingFile: fundingInfoDTO.getFundingFile()) {

        // 기존 파일명 가져오기
        String fndOrgFile = fundingFile.getOriginalFilename();  // getOriginalFilename 메소드를 활용하여 fundingFile의 이름을 String으로 가져옴.
        System.out.println("fndOrgFile = " + fndOrgFile);

        // 저장 파일명 만들기
        System.out.println(System.currentTimeMillis());         // 기존 파일명에 특수한 값을 추가하여 중복되는 파일명을 가진 파일이 DB에 저장되지 않도록 함.
        String fndSaveFile = System.currentTimeMillis() + "-" + fndOrgFile;

        // FundingFileDTO 세팅
        FundingFileDTO fundingFileDTO = new FundingFileDTO();
        fundingFileDTO.setFndOrgFile(fndOrgFile);               // 기존 파일명 저장
        fundingFileDTO.setFndSaveFile(fndSaveFile);             // 저장 파일명 저장
        fundingFileDTO.setFndCode(fndCode);                     // 펀딩 코드 삽입

        // 파일 저장용 폴더에 파일 저장 처리
//        String fndFileLoc = "/Users/jaylee/Documents/SemiFinal/fndFileLoc/" + fndSaveFile; // Mac용 저장경로
//        String fndFileLoc = "C:/Users/thunder/Desktop/revelup/" + fndSaveFile; // Window용 저장경로
        String fndFileLoc = "C:/Users/hi/Desktop/revelupimg/" + fndSaveFile;
        fundingFileDTO.setFndFileLoc(fndFileLoc);
        fundingFile.transferTo(new File(fndFileLoc));
        mapper.insertFile(fundingFileDTO);
        }
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

    @Override
    public List<FundingFileDTO> findFile(int fndCode) {
        return mapper.findFile(fndCode);
    }


}
