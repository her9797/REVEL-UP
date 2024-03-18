package com.revelup.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class FileConfig implements WebMvcConfigurer {

    private String resourcePath = "/upload/**"; //  view에서 사용할 경로
//    private String fndFileLoc = "file:///Users/jaylee/Documents/SemiFinal/fndFileLoc/";
    private String fndFileLoc = "C:/Users/hi/Desktop/revelupimg/"; // 민섭이형 경로

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resourcePath)
                .addResourceLocations(fndFileLoc);
    }

}
