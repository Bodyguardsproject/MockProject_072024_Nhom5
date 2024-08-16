package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import java.util.Date;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
public class EquipmentRequest {
	@NotNull(message = "Name of Equipment is required") String equipmentName;

	@NotNull(message = "Type of Equipment is required") String equipmentType;

	String description;

	@NotNull(message = "Date Add of Equipment is required") @DateTimeFormat(pattern = "MMddyyyy")
	private Date dateAdded;

	@NotNull(message = "Last Maintain of Equipment is required") @DateTimeFormat(pattern = "MMddyyyy")
	Date lastMaintain;

	@NotNull(message = "Quantity of Equipment is required") @PositiveOrZero(message = "Quantity of Equipment is a positive number")
	Integer status;

	private Integer delflag;
}
