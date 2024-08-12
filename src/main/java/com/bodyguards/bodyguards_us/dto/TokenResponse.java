/*
 *  TokenResponse
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:41 AM
 * */


package com.bodyguards.bodyguards_us.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TokenResponse {
    private String accessToken;
    private Long accessTokenExpiresIn;
    private String refreshToken;
    private Long refreshTokenExpiresIn;
}
