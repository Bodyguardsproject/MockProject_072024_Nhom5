package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.service.ServiceService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
public class ServiceController {

	private final ServiceService serviceService;

	@GetMapping
	public ResponseEntity<ApiResponse<List<ServiceResponse>>> getAllServices() {
		List<ServiceResponse> services = serviceService.getAllServices();
		return ResponseEntity.ok(ApiResponse.success(services));
	}

	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<ServiceResponse>> getServiceById(@PathVariable Long id) {
		return serviceService
				.getServiceById(id)
				.map(service -> ResponseEntity.ok(ApiResponse.success(service)))
				.orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
	}
}
