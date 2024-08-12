/*
 *  JwtConfig
 *  @author: Minhhieuano
 *  @created 8/12/2024 9:50 AM
 * */

package com.bodyguards.bodyguards_us.config;

import com.bodyguards.bodyguards_us.security.RsaAccessTokenKeyConfigProperties;
import com.bodyguards.bodyguards_us.security.RsaRefreshTokenKeyConfigProperties;
import com.bodyguards.bodyguards_us.utils.KeyUtils;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;

@Configuration
@RequiredArgsConstructor
@EnableConfigurationProperties({RsaAccessTokenKeyConfigProperties.class, RsaRefreshTokenKeyConfigProperties.class})
public class JwtConfig {
	private final RsaAccessTokenKeyConfigProperties accessTokenKeyConfigProperties;
	private final RsaRefreshTokenKeyConfigProperties refreshTokenKeyConfigProperties;

	private final KeyUtils keyUtils;

	@Primary
	@Bean(name = "accessTokenEncoder")
	public JwtEncoder accessTokenEncoder() {
		JWK jwk = new RSAKey.Builder(keyUtils.getAccessTokenPublicKey())
				.privateKey(keyUtils.getAccessTokenPrivateKey())
				.build();

		JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
		return new NimbusJwtEncoder(jwkSource);
	}

	@Bean("refreshTokenEncoder")
	public JwtEncoder refreshTokenEncoder() {
		JWK jwk = new RSAKey.Builder(keyUtils.getRefreshTokenPublicKey())
				.privateKey(keyUtils.getRefreshTokenPrivateKey())
				.build();

		JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
		return new NimbusJwtEncoder(jwkSource);
	}

	@Primary
	@Bean(name = "accessTokenDecoder")
	JwtDecoder accessTokenDecoder() {
		return NimbusJwtDecoder.withPublicKey(keyUtils.getAccessTokenPublicKey())
				.build();
	}

	@Bean(name = "refreshTokenDecoder")
	JwtDecoder refreshTokenDecoder() {
		return NimbusJwtDecoder.withPublicKey(keyUtils.getRefreshTokenPublicKey())
				.build();
	}
}
