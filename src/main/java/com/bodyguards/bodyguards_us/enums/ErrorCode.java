/*
 *  ErrorCode
 *  @author: Minhhieuano
 *  @created 8/8/2024 4:06 PM
 * */

package com.bodyguards.bodyguards_us.enums;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
	UNCATEGORIZED(9999, "Uncategorized exception", HttpStatus.INTERNAL_SERVER_ERROR),
	USER_NOT_FOUND(1001, "User not found", HttpStatus.NOT_FOUND),
	INVALID_TOKEN(1002, "Invalid token", HttpStatus.NOT_FOUND),
	ACCESS_DENIED(1003, "Access denied", HttpStatus.FORBIDDEN),
	UNAUTHORIZED_ERROR(1004, "Unauthorized", HttpStatus.UNAUTHORIZED),
	REQUEST_VALIDATION_FAILED(1004, "Request validation failed", HttpStatus.BAD_REQUEST),
	RESOURCE_NOT_FOUND(1005, "Resources not found", HttpStatus.NOT_FOUND),
	USER_ALREADY_EXISTED(1006, "User already existed", HttpStatus.CONFLICT),
	INVALID_USERNAME_OR_PASSWORD(1007, "Invalid username or password", HttpStatus.BAD_REQUEST),
	TO_MANY_RESET_PASSWORD(
			1008,
			"You have exceeded the maximum number of password reset attempts. Please try again tomorrow.",
			HttpStatus.TOO_MANY_REQUESTS),
	INVALID_RESET_PASSWORD_TOKEN(1009, "Invalid reset password token", HttpStatus.FORBIDDEN),
	EQUIPMENT_ALREADY_EXISTED(1010, "Equipment already existed", HttpStatus.BAD_REQUEST);
	private final String message;
	private final HttpStatus status;
	private final int code;

	ErrorCode(int code, String message, HttpStatus status) {
		this.code = code;
		this.message = message;
		this.status = status;
	}
}
