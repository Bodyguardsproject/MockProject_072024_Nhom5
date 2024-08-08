/*
 *  HelloController
 *  @author: Minhhieuano
 *  @created 8/8/2024 4:05 PM
 * */

package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelloController {
	@GetMapping
	public ResponseEntity<ApiResponse<?>> hello() {
		ApiResponse<?> response = ApiResponse.success("Hello world");
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
