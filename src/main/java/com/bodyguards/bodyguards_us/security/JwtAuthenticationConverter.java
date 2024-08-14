/*
 *  JwtAuthenticationConvertor
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:18 AM
 * */

package com.bodyguards.bodyguards_us.security;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationConverter implements Converter<Jwt, AbstractAuthenticationToken> {

	private final UserDetailsService userDetailsService;

	@Override
	public AbstractAuthenticationToken convert(@NonNull Jwt jwt) {
		String email = jwt.getClaim("email");
		UserDetails user = userDetailsService.loadUserByUsername(email);
		return new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
	}
}
