package com.revelup.notice.controller;

import com.revelup.notice.model.dto.NoticeDTO;
import com.revelup.notice.model.service.NoticeService;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.sql.Date;
import java.util.List;

@Controller
@RequestMapping("/manager")
@WebServlet
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    // 공지사항 조회 페이지 이동
    @GetMapping("/manager-notice")
    public ModelAndView noticeList(ModelAndView mv) {

        List<NoticeDTO> ntcList = noticeService.findAllNtcList();

        System.out.println("ntcList : " + ntcList + "\n");

        mv.addObject("ntcList", ntcList);

        mv.setViewName("manager/manager-notice");

        return mv;
    }


    @GetMapping("/manager-notice-details/{ntcTitle}")
    @ResponseBody
    public ResponseEntity<NoticeDTO> getNoticeDetails(@PathVariable("ntcTitle") String ntcTitle) {
        NoticeDTO notice = noticeService.selectOneNoticeList(ntcTitle);
        return ResponseEntity.ok().body(notice);
    }



//    @GetMapping("/{ntcTitle}")
//    public String selectOneList(@PathVariable("ntcTitle") String ntcTitle, Model model) {
//
//        NoticeDTO notice = noticeService.selectOneNoticeList(ntcTitle);
//
//        System.out.println("notice : " + notice + "\n");
//
//        model.addAttribute("notice", notice);
//
//        return "manager/manager-notice";
//    }



//    @GetMapping("/manager-insert-notice")
//    public String insertNotice() {
//        return "manager/manager-insert-notice";
//    }
//    @PostMapping("/manager-insert-notice")
//    public String insertNoticPage(@ModelAttribute NoticeDTO notice, RedirectAttributes rttr) {
//        noticeService.insertNotice(notice);
//        rttr.addFlashAttribute("message", "공지사항 등록에 성공하였습니다.");
//        return "redirect:/manager/manager-notice";
//
//    }



}
