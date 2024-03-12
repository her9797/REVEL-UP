package com.revelup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@ConfigurationPropertiesScan
@SpringBootApplication
public class ProjectRevelupApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectRevelupApplication.class, args);
    }

}
