package com.bodyguards.bodyguards_us.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Date;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderResponse {
    Long idOrder;
    String customerName;
    Date createdDate;
    String serviceName;
    String status;
}
