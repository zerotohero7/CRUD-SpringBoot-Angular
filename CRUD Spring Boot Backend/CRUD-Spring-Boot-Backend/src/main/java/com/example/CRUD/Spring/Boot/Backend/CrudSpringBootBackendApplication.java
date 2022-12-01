package com.example.CRUD.Spring.Boot.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableJpaRepositories
public class CrudSpringBootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringBootBackendApplication.class, args);
	}

/*	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer(){
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				 registry.addMapping("/**").allowedOrigins("http://localhost:8080");
			}
		};
	}*/


}
