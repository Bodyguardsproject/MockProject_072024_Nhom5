/*
 *  ContractController
 *  @author: Minhhieuano
 *  @created 8/19/2024 3:38 PM
 * */


package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.ContractRequest;
import com.bodyguards.bodyguards_us.service.ContractService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contracts")
@RequiredArgsConstructor
public class ContractController {
    private final ContractService contractService;

    @PostMapping("")
    @PreAuthorize("hasAnyRole('MANAGER')")
    public ResponseEntity<ApiResponse<?>> createContract(
            @RequestBody @Valid ContractRequest request
    ) {
        ApiResponse<?> response = ApiResponse.success(contractService.createContract(request));
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
