package com.revelup.funding.model.service;

import com.revelup.audit.model.dto.AuditDTO;
import com.revelup.config.SessionData;
import com.revelup.funding.model.dao.FundingMapper;
import com.revelup.funding.model.dto.*;
import com.revelup.user.model.dto.UserDTO;
import jakarta.mail.Session;
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

    @Autowired
    private SessionData sessionData;

    @Override
    @Transactional
    public void insertFirstFunding(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, SetterInfoDTO setterInfoDTO, AuditDTO auditDTO) throws IOException {
        mapper.insertSetterInfo(setterInfoDTO);
        mapper.insertFundingInfo(fundingInfoDTO);
        int fndCode = fundingInfoDTO.getFndCode();

        giftDTO.setFndCode(fndCode);// GiftDTO에 방금 직전에 동시에 생성된 펀딩코드를 담아줌.
        mapper.insertGift(giftDTO);

        /* 심사도 동시에 insert */
        auditDTO.setFndCode(fndCode);
        mapper.insertAudit(auditDTO);

        // 펀딩 파일 업로드 처리
        // 해당 메소드를 통해 fieldName 이름을 사용하여 어떤 종류의 파일인지 식별함. 식별 정보를 DB fileDiv에 저장하여 파일 구분을 추가함.
        handleFundingFileUpload("thumbnailImage", "T", fundingInfoDTO.getThumbnailImage(), fndCode);
        for (MultipartFile mainThumbnailFile : fundingInfoDTO.getMainThumbnail()) {
            handleFundingFileUpload("mainThumbnail", "M", mainThumbnailFile, fndCode);
        }
        handleFundingFileUpload("detailImage", "D", fundingInfoDTO.getDetailImage(), fndCode);

        // 세터 파일 업로드 처리
        handleSetterFileUpload("businessCertif", "B", setterInfoDTO.getBusinessCertif(), setterInfoDTO.getUserId());
        handleSetterFileUpload("sttrImg", "S", setterInfoDTO.getSttrImg(), setterInfoDTO.getUserId());
    }

    @Override
    @Transactional
    public void addFundingToExisting(FundingInfoDTO fundingInfoDTO, GiftDTO giftDTO, AuditDTO auditDTO) throws IOException {
        mapper.insertFundingInfo(fundingInfoDTO);
        int fndCode = fundingInfoDTO.getFndCode();

        giftDTO.setFndCode(fndCode);// GiftDTO에 방금 직전에 동시에 생성된 펀딩코드를 담아줌.
        mapper.insertGift(giftDTO);

        /* 심사도 동시에 insert */
        auditDTO.setFndCode(fndCode);
        mapper.insertAudit(auditDTO);

        // 펀딩 파일 업로드 처리
        handleFundingFileUpload("thumbnailImage", "T", fundingInfoDTO.getThumbnailImage(), fndCode);
        for (MultipartFile mainThumbnailFile : fundingInfoDTO.getMainThumbnail()) {
            handleFundingFileUpload("mainThumbnail", "M", mainThumbnailFile, fndCode);
        }
        handleFundingFileUpload("detailImage", "D", fundingInfoDTO.getDetailImage(), fndCode);
    }

    private void handleFundingFileUpload(String fieldName, String fileDiv, MultipartFile file, int fndCode) throws IOException {
        if (file != null && !file.isEmpty()) {
            String fndOrgFile = file.getOriginalFilename();
            String fndSaveFile = System.currentTimeMillis() + "-" + fndOrgFile;

            // 파일 저장용 폴더에 파일 저장 처리
            String fndFileLoc = "/Users/jaylee/Documents/SemiFinal/fndFileLoc/" + fndSaveFile; // 이진우 Mac용 저장경로
//        String fndFileLoc = "C:/Users/hi/Desktop/revelupimg/" + fndSaveFile; // Window용 저장경로
//        String fndFileLoc = "C:\\Users\\simko\\Desktop\\file/" + fndSaveFile; // Window용 저장경로
            file.transferTo(new File(fndFileLoc));

            String saveFile = "/Users/jaylee/Documents/SemiFinal/fndFileLoc/" + fndSaveFile;
//            String saveFile = "C:\\Users\\simko\\Desktop\\file/" + fndSaveFile;
            sessionData.setSessionAttribute("saveFile", saveFile);

            // FundingFileDTO 세팅 및 DB에 삽입
            FundingFileDTO fundingFileDTO = new FundingFileDTO();
            fundingFileDTO.setFndCode(fndCode);
            fundingFileDTO.setFndOrgFile(fndOrgFile);
            fundingFileDTO.setFndSaveFile(fndSaveFile);
            fundingFileDTO.setFndFileLoc(fndFileLoc);
            fundingFileDTO.setFileDiv(fileDiv);

            mapper.insertFile(fundingFileDTO);
        }
    }

    private void handleSetterFileUpload(String fieldName, String siFileDiv, MultipartFile file, String userId) throws IOException {
        if (file != null && !file.isEmpty()) {
            String siOrgFile = file.getOriginalFilename();
            String siSaveFile = System.currentTimeMillis() + "-" + siOrgFile;

            // 파일 저장용 폴더에 파일 저장 처리
            String siFileLoc = "/Users/jaylee/Documents/SemiFinal/fndFileLoc/" + siSaveFile; // 이진우 Mac용 저장경로
//        String siFileLoc = "C:/Users/hi/Desktop/revelupimg/" + siSaveFile; // 현지 Window용 저장경로
//        String siFileLoc = "C:/Users/simko/Desktop/file/" + siSaveFile; // 현지 Window용 저장경로



//        String fndFileLoc = "C:/Users/hi/Desktop/revelupimg/" + siSaveFile;
            file.transferTo(new File(siFileLoc));

            // SetterFileDTO 세팅 및 DB에 삽입
            SetterFileDTO setterFileDTO = new SetterFileDTO();
            setterFileDTO.setUserId(userId);
            setterFileDTO.setSiOrgFile(siOrgFile);
            setterFileDTO.setSiSaveFile(siSaveFile);
            setterFileDTO.setSiFileLoc(siFileLoc);
            setterFileDTO.setSiFileDiv(siFileDiv);

            mapper.insertSiFile(setterFileDTO);
        }
    }


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

    @Override
    public SetterFileDTO selectSttrImg(String userId) {
        return mapper.selectSttrImg(userId);
    }

    @Override
    public FundingFileDTO selectDetailImg(int fndCode) {
        return mapper.selectDetailImg(fndCode);
    }

    @Override
    public FundingInfoDTO getFundingByUserId(String userId) {
        return mapper.getFundingByUserId(userId);
    }

//    @Override
//    public FundingInfoDTO estimatedDeliv(int fndCode) {
//        return mapper.estimatedDeliv(fndCode);
//    }


}
