package com.revelup.user.model.service;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class EmailService {

    @Autowired
    private final JavaMailSender javaMailSender;

    /**
    * @info        : 지정된 주소로 이메일 전송 - ( 지원 거절 메시지 )
    * @name        : sendMail
    * @date        :
    * @author      :
    * @version     : 1.0.0
    * @param       :
    * @return      :
    * @Description : 이메일주소, 내용, 제목이 필요
    * */

    /** 이메일 전송 폼 메소드 */
    public String sendMailReject(String email) throws Exception {

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        String emailCode = createCode();
//        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
//        simpleMailMessage.setTo(email);
//        simpleMailMessage.setSubject("[revel-up]이메일 인증입니다.");
//        simpleMailMessage.setFrom("revel1234@revel.com");
//
//        simpleMailMessage.setText("귀하의 인증번호 " + emailCode + "입니다.");

        helper.setTo(email);
        helper.setSubject("[revel-up]이메일 인증입니다.");
        helper.setFrom("revel1234@revel.com");


        String htmlContent = "<html><head></head><body style=\"background-color: #2ecc71;\">" +
                "<div style=\"max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px;\">" +
                "<h2 style=\"color: #333333;\">[revel-up] 이메일 인증</h2>" +
                "<p style=\"color: #333333;\">안녕하세요! [REVEL-UP] 입니다.</p>" +
                "<p style=\"color: #333333;\">귀하의 인증번호는 <strong style=\"color: #0cc291;\">"+ emailCode + "</strong>입니다.</p>" +
                "</div></body></html>";

        helper.setText(htmlContent, true);

        javaMailSender.send(message);

        try {
//            javaMailSender.send(simpleMailMessage);
            javaMailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
            return emailCode;
        }
        return emailCode;
    }

    /** 인증번호 및 임시 비밀번호 생성 메소드 */
    public String createCode() {
        Random random = new Random();
        StringBuffer key = new StringBuffer();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(4);

            switch (index) {
                case 0: key.append((char) ((int) random.nextInt(26) + 97)); break;
                case 1: key.append((char) ((int) random.nextInt(26) + 65)); break;
                default: key.append(random.nextInt(9));
            }
        }
        return key.toString();
    }

}
