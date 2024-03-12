package com.revelup.notice.model.dao;

import com.revelup.notice.model.dto.NoticeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface NoticeMapper {

    List<NoticeDTO> findAllNtcList();

    /* 공지사항 등록 */
    void insertNotice(NoticeDTO notice);


    NoticeDTO selectByDetails(int ntcCode);

//    NoticeDTO selectOneNoticeList(String ntcTitle);
}
