/*
 *  AuthController
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:28 AM
 * */

package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.*;
import com.bodyguards.bodyguards_us.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService authService;

	@PostMapping("/register")
	public ResponseEntity<ApiResponse<?>> register(@RequestBody() @Valid CreateAccountRequest request) {
		ApiResponse<?> response = ApiResponse.success(authService.register(request));
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<ApiResponse<?>> login(@RequestBody() @Valid LoginRequest request) {
		ApiResponse<?> response = ApiResponse.success(authService.login(request));
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("refresh-token")
	public ResponseEntity<ApiResponse<?>> login(@RequestBody() @Valid RefreshTokenRequest request) {
		ApiResponse<?> response = ApiResponse.success(authService.refreshToken(request));
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/forgot-password")
	private ResponseEntity<ApiResponse<?>> forgotPassword(@RequestBody @Valid ForgotPasswordRequest request) {
		ApiResponse<?> response = ApiResponse.success(authService.forgotPassword(request));
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PatchMapping("/update-password")
	private ResponseEntity<ApiResponse<?>> updatePassword(@RequestBody @Valid UpdatePasswordRequest request) {
		ApiResponse<?> response = ApiResponse.success(authService.updatePassword(request));
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
