/*
 *  AuthServiceImpl
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:30 AM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.bodyguards.bodyguards_us.dto.*;
import com.bodyguards.bodyguards_us.entity.PasswordResetRequest;
import com.bodyguards.bodyguards_us.entity.PasswordResetToken;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.UserMapper;
import com.bodyguards.bodyguards_us.repository.PasswordResetRequestRepository;
import com.bodyguards.bodyguards_us.repository.PasswordResetTokenRepository;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.AuthService;
import com.bodyguards.bodyguards_us.service.JwtService;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
	private final UserRepository userRepository;
	private final UserMapper userMapper;
	private final RoleRepository roleRepository;
	private final JwtService jwtService;
	private final PasswordEncoder passwordEncoder;
	private final PasswordResetTokenRepository passwordResetTokenRepository;
	private final PasswordResetRequestRepository passwordResetRequestRepository;

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
	public String forgotPassword(ForgotPasswordRequest request) {

		User user = userRepository
				.findByEmail(request.getEmail())
				.orElseThrow(() -> new ApiException(ErrorCode.USER_NOT_FOUND));

		LocalDateTime startDate = LocalDateTime.now().truncatedTo(ChronoUnit.DAYS);
		LocalDateTime endDate = startDate.plusDays(1).minusNanos(1);

		int numberOfRequestToday =
				passwordResetRequestRepository.countByUserIdAndRequestTimeBetween(user.getIdUser(), startDate, endDate);

		if (numberOfRequestToday >= 5) {
			throw new ApiException(ErrorCode.TO_MANY_RESET_PASSWORD);
		}

		userRepository.save(user);

		String plainToken = NanoIdUtils.randomNanoId();

		PasswordResetRequest passwordResetRequest = PasswordResetRequest.builder()
				.requestTime(LocalDateTime.now())
				.userId(user.getIdUser())
				.build();

		PasswordResetToken passwordResetToken = PasswordResetToken.builder()
				.userId(user.getIdUser())
				.token(plainToken)
				.isUsed(false)
				.expiredAt(LocalDateTime.now().plusMinutes(5))
				.build();

		passwordResetRequestRepository.save(passwordResetRequest);
		passwordResetTokenRepository.save(passwordResetToken);

		// TODO: send mail to user
		System.out.println("token " + plainToken);

		return "Send forgot password link successfully";
	}

	@Override
	public String updatePassword(UpdatePasswordRequest request) {
		String token = request.getToken();

		PasswordResetToken passwordResetToken = passwordResetTokenRepository
				.findByToken(token)
				.orElseThrow(() -> new ApiException(ErrorCode.INVALID_RESET_PASSWORD_TOKEN));

		if (LocalDateTime.now().isAfter(passwordResetToken.getExpiredAt()) || passwordResetToken.isUsed()) {
			throw new ApiException(ErrorCode.INVALID_RESET_PASSWORD_TOKEN);
		}

		passwordResetToken.setUsed(true);

		User user = userRepository
				.findById(passwordResetToken.getUserId())
				.orElseThrow(() -> new ApiException(ErrorCode.USER_NOT_FOUND));

		user.setPassword(passwordEncoder.encode(request.getNewPassword()));

		passwordResetTokenRepository.save(passwordResetToken);
		userRepository.save(user);

		return "Your password has been updated. Please login again";
	}

	@Override
	public TokenResponse refreshToken(RefreshTokenRequest request) {
		return jwtService.refreshToken(request.getRefreshToken());
	}
}
