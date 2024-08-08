package com.bodyguards.bodyguards_us.exception;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ApiException.class)
	public ResponseEntity<ApiResponse<?>> handleException(ApiException ex) {
		ErrorCode errorCode = ex.getErrorCode();
		ApiResponse<?> response = ApiResponse.error(errorCode.getCode(), errorCode.getMessage());
		return new ResponseEntity<>(response, errorCode.getStatus());
	}
}
