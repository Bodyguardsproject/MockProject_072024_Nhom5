package com.bodyguards.bodyguards_us.exception;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.oauth2.server.resource.InvalidBearerTokenException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ApiResponse<?>> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
		Map<String, Object> errors = new HashMap<>();

		for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
			errors.put(fieldError.getField(), fieldError.getDefaultMessage());
		}
		ErrorCode errorCode = ErrorCode.REQUEST_VALIDATION_FAILED;
		return new ResponseEntity<>(ApiResponse.error(errorCode.getCode(), errors), ex.getStatusCode());
	}

	@ExceptionHandler(ApiException.class)
	public ResponseEntity<ApiResponse<?>> handleException(ApiException ex) {
		ErrorCode errorCode = ex.getErrorCode();
		ApiResponse<?> response = ApiResponse.error(errorCode.getCode(), errorCode.getMessage());
		return new ResponseEntity<>(response, errorCode.getStatus());
	}

	@ExceptionHandler(AccessDeniedException.class)
	public ResponseEntity<ApiResponse<?>> handleAccessDeniedException(AccessDeniedException ex) {
		ErrorCode errorCode = ErrorCode.ACCESS_DENIED;
		ApiResponse<?> response = ApiResponse.error(errorCode.getCode(), ex.getMessage());
		return new ResponseEntity<>(response, errorCode.getStatus());
	}

	@ExceptionHandler(AuthenticationException.class)
	public ResponseEntity<ApiResponse<?>> handleAuthenticationException(AuthenticationException ex) {
		ErrorCode errorCode = ErrorCode.UNAUTHORIZED_ERROR;
		ApiResponse<?> response = ApiResponse.error(errorCode.getCode(), ex.getMessage());
		return new ResponseEntity<>(response, errorCode.getStatus());
	}

	@ExceptionHandler({InvalidBearerTokenException.class, JwtException.class})
	public ResponseEntity<ApiResponse<?>> handleTokenException(Exception ex) {
		ErrorCode errorCode = ErrorCode.INVALID_TOKEN;
		ApiResponse<?> response = ApiResponse.error(errorCode.getCode(), ex.getMessage());
		return new ResponseEntity<>(response, errorCode.getStatus());
	}
}
