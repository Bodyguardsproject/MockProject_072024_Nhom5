/*
 *  UpdatePasswordRequest
 *  @author: Minhhieuano
 *  @created 8/14/2024 11:06 PM
 * */

package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class UpdatePasswordRequest {

	@NotBlank
	@NotNull private String token;

	@Pattern(
			regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
			message =
					"Password must be at least 8 character, one numeric character, one special character, without space and including lowercase, uppercase character")
	private String newPassword;
}
