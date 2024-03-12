package com.revelup.notice.model.service;

import com.revelup.notice.model.dao.NoticeMapper;
import com.revelup.notice.model.dto.NoticeDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class NoticeService {

    private final NoticeMapper noticeMapper;


    public NoticeService(NoticeMapper noticeMapper) {
        this.noticeMapper = noticeMapper;
    }


    public List<NoticeDTO> findAllNtcList() {

        return noticeMapper.findAllNtcList();
    }


    @Transactional
    public void insertNotice(NoticeDTO noticeDTO) {

        noticeMapper.insertNotice(noticeDTO);

    }

    public NoticeDTO findByOne(String findByNotice) {

        return noticeMapper.findByOne(findByNotice);
    }

//    public NoticeDTO selectOneNoticeList(String ntcTitle) {
//        return noticeMapper.selectOneNoticeList(ntcTitle);
//    }
}
