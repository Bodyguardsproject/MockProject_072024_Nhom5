package com.bodyguards.bodyguards_us;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class BodyguardsUsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BodyguardsUsApplication.class, args);
    }
}
