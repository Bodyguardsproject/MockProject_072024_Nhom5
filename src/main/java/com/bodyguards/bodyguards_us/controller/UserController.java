package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.service.UserService;
import com.bodyguards.bodyguards_us.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("")
    public ResponseEntity<ApiResponse<?>> findByEmail(@RequestParam String email){
        List<User> user = userService.findByEmailContaining(email);
        return ResponseEntity.ok(ApiResponse.success(user));
    }

}
