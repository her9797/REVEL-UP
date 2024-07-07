package com.revelup.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class FileConfig implements WebMvcConfigurer {

    private String resourcePath = "/upload/**"; //  view에서 사용할 경로
    private String fndFileLoc = "file:///C:/★Study★/semi-project/file/"; // Window용 저장경로


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resourcePath)
                .addResourceLocations(fndFileLoc);
    }

}
