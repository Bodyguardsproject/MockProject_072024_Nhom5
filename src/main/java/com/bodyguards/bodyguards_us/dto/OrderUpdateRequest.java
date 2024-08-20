package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class OrderUpdateRequest {
    @NotNull(message = "Status is required")
    @Pattern(regexp = "COMPLETED|IN_PROGRESS", message = "Status must be either IN_PROGRESS or COMPLETED")
    String status;
}
