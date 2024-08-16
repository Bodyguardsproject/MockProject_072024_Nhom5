package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.ServiceRequest;
import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.service.ServiceService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return serviceService.getServiceById(id)
                .map(service -> ResponseEntity.ok(ApiResponse.success(service)))
                .orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ServiceResponse>> createService(@RequestBody ServiceRequest serviceRequest) {
        ServiceResponse createdService = serviceService.createService(serviceRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(createdService));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ServiceResponse>> replaceService(
            @PathVariable Long id, @RequestBody ServiceRequest serviceRequest) {
        return serviceService.replaceService(id, serviceRequest)
                .map(service -> ResponseEntity.ok(ApiResponse.success(service)))
                .orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse<ServiceResponse>> partialUpdateService(
            @PathVariable Long id, @RequestBody ServiceRequest serviceRequest) {
        return serviceService.partialUpdateService(id, serviceRequest)
                .map(service -> ResponseEntity.ok(ApiResponse.success(service)))
                .orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
        return ResponseEntity.noContent().build();
    }

	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<ServiceResponse>> getServiceById(@PathVariable Long id) {
		return serviceService
				.getServiceById(id)
				.map(service -> ResponseEntity.ok(ApiResponse.success(service)))
				.orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
	}

}
