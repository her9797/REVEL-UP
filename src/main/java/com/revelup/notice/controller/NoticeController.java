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
    public String noticeList(Model model) {

        List<NoticeDTO> noticeList = noticeService.findAllNtcList();
        model.addAttribute("noticeList", noticeList);
        return "manager/manager-notice";

    }


    @PostMapping("/insert-notice")
    public String insertNotice(NoticeDTO noticeDTO){

        noticeService.insertNotice(noticeDTO);
        return "redirect:/manager/manager-notice";
    }

    @GetMapping("/manager-notice/{ntcCode}")
    @ResponseBody
    public NoticeDTO noticeDetails(@PathVariable int ntcCode) {
        return noticeService.selectByDetails(ntcCode);
    }

    @PostMapping("/delete/{ntcCode}")
    @ResponseBody
    public String deleteNotice(@PathVariable int ntcCode) {

        noticeService.deleteNotice(ntcCode);

        return "redirect:/main";
    }

    @PostMapping("/update")
    public String updateNotice(NoticeDTO noticeDTO){

        noticeService.updateNotice(noticeDTO);

        return "redirect:/manager/manager-notice";

    }


}
