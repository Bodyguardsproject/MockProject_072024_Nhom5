/*
 *  JpaConfig
 *  @author: Minhhieuano
 *  @created 8/17/2024 9:42 AM
 * */

package com.bodyguards.bodyguards_us.config;

import com.bodyguards.bodyguards_us.entity.auditor.AuditorAwareImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class JpaConfig {
	@Bean
	public AuditorAwareImpl auditorAware() {
		return new AuditorAwareImpl();
	}
}
