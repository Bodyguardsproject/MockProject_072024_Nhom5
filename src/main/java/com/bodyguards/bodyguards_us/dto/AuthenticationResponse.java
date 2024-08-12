/*
 *  AuthenticationResponse
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:42 AM
 * */

package com.bodyguards.bodyguards_us.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AuthenticationResponse {
	private UserResponse user;
	private TokenResponse tokens;
}
