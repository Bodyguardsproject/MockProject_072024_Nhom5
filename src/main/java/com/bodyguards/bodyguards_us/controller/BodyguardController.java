package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.BodyguardResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.service.BodyguardService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bodyguards")
@RequiredArgsConstructor
public class BodyguardController {

	private final BodyguardService bodyguardService;

	@GetMapping
	public ResponseEntity<ApiResponse<List<BodyguardResponse>>> getAllBodyguards() {
		List<BodyguardResponse> bodyguards = bodyguardService.getAllBodyguards();
		return ResponseEntity.ok(ApiResponse.success(bodyguards));
	}

	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<BodyguardResponse>> getBodyguardById(@PathVariable Long id) {
		return bodyguardService
				.getBodyguardById(id)
				.map(bodyguard -> ResponseEntity.ok(ApiResponse.success(bodyguard)))
				.orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
	}
}
