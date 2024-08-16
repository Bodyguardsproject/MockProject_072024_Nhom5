package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.AddAccountRequest;
import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.service.UserService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("")
	public ResponseEntity<ApiResponse<?>> findByEmail(@RequestParam String email) {
		List<User> user = userService.findByEmailContaining(email);
		return ResponseEntity.ok(ApiResponse.success(user));
	}

	@PostMapping("/add-account")
	public ResponseEntity<ApiResponse<?>> addAccount(@RequestBody @Valid AddAccountRequest request) {
		ApiResponse<?> response = ApiResponse.success(userService.addAccount(request));
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
}
