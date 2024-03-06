package com.revelup.user.model.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class EmailService {

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

        String emailCode = createCode();
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(email);
        simpleMailMessage.setSubject("[revel-up]이메일 인증입니다.");
        simpleMailMessage.setFrom("revel1234@revel.com");
        simpleMailMessage.setText("귀하의 인증번호 " + emailCode + "입니다.");

        try {
            javaMailSender.send(simpleMailMessage);
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
