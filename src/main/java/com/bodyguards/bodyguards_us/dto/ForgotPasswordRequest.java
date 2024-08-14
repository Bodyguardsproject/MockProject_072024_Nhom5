/*
 *  ForgotPasswordRequest
 *  @author: Minhhieuano
 *  @created 8/14/2024 10:03 PM
 * */


package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ForgotPasswordRequest {

    @NotBlank
    @NotNull
    @Email(message = "Invalid email address")
    private String email;
}
