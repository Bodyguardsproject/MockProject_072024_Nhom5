/*
 *  OrderController
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:16 PM
 * */

package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.CreateOrderRequest;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

	private final OrderService orderService;

	@PostMapping()
	public ResponseEntity<ApiResponse<?>> createOrder(
			@RequestBody @Valid CreateOrderRequest request, @AuthenticationPrincipal User user) {
		ApiResponse<?> response = ApiResponse.success(orderService.createOrder(request, user));
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
}
