/*
 *  LoginRequest
 *  @author: Minhhieuano
 *  @created 8/12/2024 2:07 PM
 * */

package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class LoginRequest {
	@NotBlank
	@NotNull @Email(message = "Invalid email address")
	private String email;

	@Pattern(
			regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
			message =
					"Password must be at least 8 character, one numeric character, one special character, without space and including lowercase, uppercase character")
	private String password;
}
