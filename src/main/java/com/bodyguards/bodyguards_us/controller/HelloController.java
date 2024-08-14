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
@RequestMapping("/test")
public class HelloController {
    @GetMapping("admin")
    public ResponseEntity<ApiResponse<?>> helloAdmin() {
        ApiResponse<?> response = ApiResponse.success("Hello admin");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("bodyguard")
    public ResponseEntity<ApiResponse<?>> helloBodyguard() {
        ApiResponse<?> response = ApiResponse.success("Hello Bodyguard");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
