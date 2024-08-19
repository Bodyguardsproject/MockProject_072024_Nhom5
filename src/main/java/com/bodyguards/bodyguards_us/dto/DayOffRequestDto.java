package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class DayOffRequestDto {
    @NotNull
    List<Long> idSchedules;

    @NotNull(message = "Reason is required")
    String reason;
}
