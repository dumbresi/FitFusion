package com.fitFusion.springbootlibrary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringBootLibraryApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootLibraryApplication.class, args);
    }

    //    @Bean
//    public WebMvcConfigurer corsConfigurer(){
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry){
//                registry.addMapping("/**")
//                        .allowedOrigins("http://localhost:5173") // Update with your React app's URL
//                        .allowedMethods("GET", "POST", "PUT", "DELETE")
//                        .allowedHeaders("Content-Type")
//                        .allowCredentials(true)
//                        .maxAge(3600);
//            }
//        };
//    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:5173");
            }
        };
    }

}