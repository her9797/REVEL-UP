package com.revelup.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.util.HashMap;
import java.util.Map;

@Component
@SessionScope
@Getter
@Setter
public class SessionData {

    private Map<String, Object> sessionAttributes;

    public SessionData() {
        sessionAttributes = new HashMap<>();
    }

    public void setSessionAttribute(String attributeName, Object attributeValue) {
        sessionAttributes.put(attributeName, attributeValue);
    }

    // 세션에서 속성 가져오기
    public Object getSessionAttribute(String attributeName) {
        return sessionAttributes.get(attributeName);
    }

    // 세션에서 속성 제거
    public void removeSessionAttribute(String attributeName) {
        sessionAttributes.remove(attributeName);
    }



    private int fndCodeOfPay;






}
