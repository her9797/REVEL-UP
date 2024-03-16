package com.revelup.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class FileConfig implements WebMvcConfigurer {

    private String resourcePath = "/upload/**"; //  view에서 사용할 경로
//    private String fndFileLoc = "file:///Users/jaylee/Documents/SemiFinal/fndFileLoc/"; // Mac용 저장경로
//    private String fndFileLoc = "file:///D:/저장경로 상위폴더/저장경로 하위폴더/fndFileLoc/" // Window용 저장경로
    String fndFileLoc = "C:/Users/thunder/Desktop/revelup/fndFileLoc/"; // Window용 저장경로

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resourcePath)
                .addResourceLocations(fndFileLoc);
    }

}
