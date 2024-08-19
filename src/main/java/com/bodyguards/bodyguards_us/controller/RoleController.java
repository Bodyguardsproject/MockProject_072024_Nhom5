/*
 *  RoleController
 *  @author: Minhhieuano
 *  @created 8/17/2024 9:00 AM
 * */

package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
public class RoleController {
	private final RoleService roleService;

	@GetMapping()
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<ApiResponse<?>> getAllRole() {
		ApiResponse<?> response = ApiResponse.success(roleService.getAllRole());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
