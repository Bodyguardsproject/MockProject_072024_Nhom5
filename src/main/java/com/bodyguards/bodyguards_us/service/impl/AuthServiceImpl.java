/*
 *  AuthServiceImpl
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:30 AM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.*;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.UserMapper;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.AuthService;
import com.bodyguards.bodyguards_us.service.JwtService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
	private final UserRepository userRepository;
	private final UserMapper userMapper;
	private final RoleRepository roleRepository;
	private final JwtService jwtService;
	private final PasswordEncoder passwordEncoder;

	@Override
	public AuthenticationResponse register(CreateAccountRequest request) {

		if (userRepository.existsByEmail(request.getEmail())) {
			throw new ApiException(ErrorCode.USER_ALREADY_EXISTED);
		}

		User user = userMapper.createAccountRequestToUser(request);

		Role role = roleRepository
				.findByName(UserRole.USER)
				.orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));

		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRoles(List.of(role));

		User newUser = userRepository.save(user);
		UserResponse userResponse = userMapper.userToUserResponse(newUser);

		TokenResponse tokenResponse = jwtService.generateTokenPair(
				new UsernamePasswordAuthenticationToken(newUser, null, newUser.getAuthorities()));

		return AuthenticationResponse.builder()
				.tokens(tokenResponse)
				.user(userResponse)
				.build();
	}

	@Bean
	CorsConfigurationSource apiConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.addAllowedOrigin("*");
		configuration.addAllowedMethod("*");
		configuration.addAllowedHeader("*");
		configuration.setAllowCredentials(true);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Override
	public AuthenticationResponse login(LoginRequest request) {

		User user = userRepository
				.findByEmail(request.getEmail())
				.orElseThrow(() -> new ApiException(ErrorCode.INVALID_USERNAME_OR_PASSWORD));

		if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			throw new ApiException(ErrorCode.INVALID_USERNAME_OR_PASSWORD);
		}

		UserResponse userResponse = userMapper.userToUserResponse(user);

		TokenResponse tokenResponse = jwtService.generateTokenPair(
				new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities()));

		return AuthenticationResponse.builder()
				.tokens(tokenResponse)
				.user(userResponse)
				.build();
	}

	@Override
	public TokenResponse refreshToken(RefreshTokenRequest request) {
		return jwtService.refreshToken(request.getRefreshToken());
	}
}
