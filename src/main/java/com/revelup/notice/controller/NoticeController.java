package com.revelup.notice.controller;

import com.revelup.notice.model.dto.NoticeDTO;
import com.revelup.notice.model.service.NoticeService;
import jakarta.servlet.annotation.WebServlet;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;

@Controller
@RequestMapping("/manager")
@WebServlet
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    /** 공지사항 리스트 -> 페이징 */
    @GetMapping("/manager-notice")
    public String getNoticeByPage(@RequestParam(value = "page", defaultValue = "1") int page,
                                  @RequestParam(value = "size", defaultValue = "10") int size, Model model) {

        int noticePerPage = size; // 페이지 당 공지사항 수
        int totalNotice = noticeService.totalNotice(); // 전체 공지사항 수

        int totalPage = (int) Math.ceil((double) totalNotice / noticePerPage); // 전체 페이지 수

        int start = Math.max((page - 1) * size, 0);
        int end = Math.min(start + size, totalNotice); // 끝 인덱스

        List<NoticeDTO> notice = noticeService.getNoticeByPage(start, size); // 해당 페이지의 공지사항 가져오기

        // 페이지 범위 계산
        int rangeStart = (page - 1) * size + 1;
        int rangeEnd = Math.min(page * size, totalNotice);

        // 공지사항이 없는 경우 페이지 번호를 1로 고정 -> 1 / 0이 같이보여서 수정
        if (totalNotice == 0) {
            page = 1;
            totalPage = 1;
        }

        model.addAttribute("noticeList", notice); // 모델에 공지사항 리스트 추가
        model.addAttribute("page", page); // 현재 페이지 번호 추가
        model.addAttribute("totalPage", totalPage); // 전체 페이지 수 추가
        model.addAttribute("rangeStart", rangeStart); // 페이지 범위 시작 추가
        model.addAttribute("rangeEnd", rangeEnd); // 페이지 범위 끝 추가

        return "manager/manager-notice";
    }


    /** 공지사항 등록 */
    @PostMapping("/insert-notice")
    public String insertNotice(NoticeDTO noticeDTO){

        noticeService.insertNotice(noticeDTO);
        return "redirect:/manager/manager-notice";
    }

    /** 공지사항 상세조회 */
    @GetMapping("/manager-notice/{ntcCode}")
    @ResponseBody
    public NoticeDTO noticeDetails(@PathVariable int ntcCode) {
        return noticeService.selectByDetails(ntcCode);
    }

    /** 공지사항 삭제 */
    @PostMapping("/delete/{ntcCode}")
    @ResponseBody
    public String deleteNotice(@PathVariable int ntcCode) {

        noticeService.deleteNotice(ntcCode);

        return "redirect:/main";
    }

    /** 공지사항 수정 */
    @PostMapping("/update")
    public String updateNotice(NoticeDTO noticeDTO){

        noticeService.updateNotice(noticeDTO);

        return "redirect:/manager/manager-notice";

    }


}
