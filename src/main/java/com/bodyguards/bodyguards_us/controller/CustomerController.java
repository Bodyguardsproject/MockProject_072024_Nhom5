package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.CustomerResponse;
import com.bodyguards.bodyguards_us.service.CustomerService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerController {

	private final CustomerService customerService;

	public CustomerController(CustomerService customerService) {
		this.customerService = customerService;
	}

	@GetMapping
	public ResponseEntity<ApiResponse<List<CustomerResponse>>> getAllCustomers() {
		List<CustomerResponse> customers = customerService.getAllCustomers();
		return ResponseEntity.ok(ApiResponse.success(customers));
	}
}
