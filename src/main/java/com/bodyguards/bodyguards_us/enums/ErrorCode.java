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
	;
	private final String message;
	private final HttpStatus status;
	private final int code;

	ErrorCode(int code, String message, HttpStatus status) {
		this.code = code;
		this.message = message;
		this.status = status;
	}
}