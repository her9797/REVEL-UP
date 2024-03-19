package com.revelup.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class FileConfig implements WebMvcConfigurer {

    private String resourcePath = "/upload/**"; //  view에서 사용할 경로
//    private String fndFileLoc = "file:///Users/jaylee/Documents/SemiFinal/fndFileLoc/"; // Mac용 저장경로
    private String fndFileLoc = "file:///C:/Users/thunder/Desktop/revelup/"; // Mac용 저장경로
//    private String fndFileLoc = "file:///C:/Users/hi/Desktop/revelupimg/"; // Window용 저장경로
//    private String fndFileLoc = "file:///C:/Users/simko/Desktop/file/"; // Window용 저장경로


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resourcePath)
                .addResourceLocations(fndFileLoc);
    }

}
