/*
 *  ApiException
 *  @author: Minhhieuano
 *  @created 8/8/2024 4:06 PM
 * */

package com.bodyguards.bodyguards_us.exception;

import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiException extends RuntimeException {
	private ErrorCode errorCode;

	public ApiException(ErrorCode errorCode) {
		super(errorCode.getMessage());
		this.errorCode = errorCode;
	}
}
