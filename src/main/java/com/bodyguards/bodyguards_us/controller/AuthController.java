/*
 *  AuthController
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:28 AM
 * */

package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.CreateAccountRequest;
import com.bodyguards.bodyguards_us.dto.LoginRequest;
import com.bodyguards.bodyguards_us.dto.RefreshTokenRequest;
import com.bodyguards.bodyguards_us.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
