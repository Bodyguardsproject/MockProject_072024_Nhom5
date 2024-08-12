/*
 *  JwtServiceImpl
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:40 AM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.TokenResponse;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.TokenType;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.security.JwtAuthenticationConverter;
import com.bodyguards.bodyguards_us.security.RsaAccessTokenKeyConfigProperties;
import com.bodyguards.bodyguards_us.security.RsaRefreshTokenKeyConfigProperties;
import com.bodyguards.bodyguards_us.service.JwtService;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.stereotype.Service;

@Service
public class JwtServiceImpl implements JwtService {

	private final RsaAccessTokenKeyConfigProperties accessTokenKeyConfigProperties;
	private final RsaRefreshTokenKeyConfigProperties refreshTokenKeyConfigProperties;
	private final JwtEncoder accessTokenEncoder;
	private final JwtEncoder refreshTokenEncoder;
	private final JwtDecoder refreshTokenDecoder;
	private final JwtAuthenticationConverter jwtAuthenticationConverter;

	public JwtServiceImpl(
			RsaAccessTokenKeyConfigProperties accessTokenKeyConfigProperties,
			RsaRefreshTokenKeyConfigProperties refreshTokenKeyConfigProperties,
			JwtAuthenticationConverter jwtAuthenticationConverter,
			@Qualifier("accessTokenEncoder") JwtEncoder accessTokenEncoder,
			@Qualifier("refreshTokenEncoder") JwtEncoder refreshTokenEncoder,
			@Qualifier("refreshTokenDecoder") JwtDecoder refreshTokenDecoder) {
		this.accessTokenEncoder = accessTokenEncoder;
		this.refreshTokenEncoder = refreshTokenEncoder;
		this.refreshTokenDecoder = refreshTokenDecoder;
		this.accessTokenKeyConfigProperties = accessTokenKeyConfigProperties;
		this.refreshTokenKeyConfigProperties = refreshTokenKeyConfigProperties;
		this.jwtAuthenticationConverter = jwtAuthenticationConverter;
	}

	@Override
	public TokenResponse generateTokenPair(Authentication authentication) {
		return TokenResponse.builder()
				.accessToken(generateAccessToken(authentication))
				.refreshToken(generateRefreshToken(authentication))
				.accessTokenExpiresIn(getAccessTokenExpiredTime().toEpochMilli())
				.refreshTokenExpiresIn(getRefreshTokenExpiredTime().toEpochMilli())
				.build();
	}

	@Override
	public TokenResponse refreshToken(String refreshToken) {
		Jwt jwt = refreshTokenDecoder.decode(refreshToken);
		if (!jwt.getClaim("type").toString().equals(TokenType.REFRESH_TOKEN.toString())) {
			throw new ApiException(ErrorCode.INVALID_TOKEN);
		}
		Authentication authentication = jwtAuthenticationConverter.convert(jwt);
		return generateTokenPair(authentication);
	}

	private String generateAccessToken(Authentication authentication) {
		User user = (User) authentication.getPrincipal();
		Instant now = Instant.now();

		JwtClaimsSet claimsSet = JwtClaimsSet.builder()
				.subject(user.getIdUser().toString())
				.claim("email", user.getEmail())
				.claim("scope", user.getAuthorities())
				.claim("type", TokenType.ACCESS_TOKEN)
				.expiresAt(now.plus(accessTokenKeyConfigProperties.expireIn(), ChronoUnit.HOURS))
				.build();
		return accessTokenEncoder.encode(JwtEncoderParameters.from(claimsSet)).getTokenValue();
	}

	private String generateRefreshToken(Authentication authentication) {
		User user = (User) authentication.getPrincipal();
		Instant now = Instant.now();

		JwtClaimsSet claimsSet = JwtClaimsSet.builder()
				.subject(user.getIdUser().toString())
				.claim("email", user.getEmail())
				.claim("scope", user.getAuthorities())
				.claim("type", TokenType.REFRESH_TOKEN)
				.expiresAt(now.plus(refreshTokenKeyConfigProperties.expireIn(), ChronoUnit.HOURS))
				.build();
		return refreshTokenEncoder.encode(JwtEncoderParameters.from(claimsSet)).getTokenValue();
	}

	private Instant getAccessTokenExpiredTime() {
		Instant now = Instant.now();
		return now.plus(accessTokenKeyConfigProperties.expireIn(), ChronoUnit.HOURS);
	}

	private Instant getRefreshTokenExpiredTime() {
		Instant now = Instant.now();
		return now.plus(refreshTokenKeyConfigProperties.expireIn(), ChronoUnit.HOURS);
	}
}
