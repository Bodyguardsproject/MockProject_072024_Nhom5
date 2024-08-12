/*
 *  RefreshTokenRequest
 *  @author: Minhhieuano
 *  @created 8/12/2024 2:25 PM
 * */


package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RefreshTokenRequest {
    @NotNull
    @NotBlank
    private String refreshToken;
}
