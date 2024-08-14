/*
 *  AuthService
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:30 AM
 * */

package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.*;

public interface AuthService {
	AuthenticationResponse register(CreateAccountRequest request);

	AuthenticationResponse login(LoginRequest request);

	TokenResponse refreshToken(RefreshTokenRequest request);
}
