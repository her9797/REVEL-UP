package com.revelup.mypage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/manager")
public class ManagerController {

    // 매니저 공지사항 페이지이동(푸터 공지사항에 링크 걸어둠)
//    @GetMapping("/manager-notice")
//    public String managerNoticePage() {
//        return "/manager/manager-notice";
//    }

    @GetMapping("/manager-inquiry")
    public String managerInquiryPage() {
        return "/manager/manager-inquiry";
    }

    @GetMapping("/manager-calculate")
    public String managerCalculatePage() {
        return "/manager/manager-calculate";
    }

    @GetMapping("/manager-report")
    public String managerReportPage() {
        return "/manager/manager-report";
    }



}
