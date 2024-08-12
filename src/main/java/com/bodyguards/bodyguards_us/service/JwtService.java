/*
 *  JwtService
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:40 AM
 * */


package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.TokenResponse;
import org.springframework.security.core.Authentication;

public interface JwtService {
    TokenResponse generateTokenPair(Authentication authentication);

    TokenResponse refreshToken(String refreshToken);

}
