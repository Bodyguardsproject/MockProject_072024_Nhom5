/*
 *  CreateOrderRequest
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:27 PM
 * */


package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CreateOrderRequest {

    @NotBlank
    @NotNull
    private Long serviceId;

    @NotBlank
    @NotNull
    private String location;

    @NotBlank
    @NotNull
    private int numberOfSecurityGuard;

    @NotNull
    @Size(min = 1)
    private List<Date> orderDates;

    private String comment;

}
