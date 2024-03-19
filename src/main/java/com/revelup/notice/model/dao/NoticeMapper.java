package com.revelup.notice.model.dao;

import com.revelup.notice.model.dto.NoticeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface NoticeMapper {

    /** 공지사항 전체 목록 조회 */
    List<NoticeDTO> findAllNtcList();

    /** 공지사항 등록 */
    void insertNotice(NoticeDTO notice);

    /** 공지사항 상세조회 */
    NoticeDTO selectByDetails(int ntcCode);

    /** 공지사항 삭제 */
    void deleteNotice(int ntcCode);

    /** 공지사항 수정 */
    void updateNotice(NoticeDTO noticeDTO);


    int totalNotice();

    List<NoticeDTO> getNoticeByPage(@Param("start") int start, @Param("size") int size);
}
