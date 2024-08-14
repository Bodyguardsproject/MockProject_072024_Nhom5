/*
 *  SecurityConfig
 *  @author: Minhhieuano
 *  @created 8/12/2024 9:35 AM
 * */

package com.bodyguards.bodyguards_us.config;

import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.security.JwtAuthenticationConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

	private final AccessDeniedHandler accessDeniedHandler;
	private final AuthenticationEntryPoint authenticationEntryPoint;
	private final JwtAuthenticationConverter jwtAuthenticationConverter;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http.csrf(AbstractHttpConfigurer::disable)
				.exceptionHandling(config -> config.accessDeniedHandler(accessDeniedHandler)
						.authenticationEntryPoint(authenticationEntryPoint))
				.sessionManagement(config -> config.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(handler -> handler.requestMatchers(
								"/docs", "/v3/api-docs/**", "/swagger-ui.html", "/swagger-ui/**", "/auth/**")
						.permitAll()
						.requestMatchers("/test/admin")
						.hasRole(UserRole.ADMIN.toString())
						.requestMatchers("/test/bodyguard")
						.hasRole(UserRole.BODYGUARD.toString())
						.anyRequest()
						.authenticated())
				.oauth2ResourceServer(oauth -> oauth.authenticationEntryPoint(authenticationEntryPoint)
						.jwt(jwtConfig -> jwtConfig.jwtAuthenticationConverter(jwtAuthenticationConverter)))
				.build();
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	}
}
