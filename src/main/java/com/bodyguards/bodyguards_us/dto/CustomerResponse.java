package com.bodyguards.bodyguards_us.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerResponse {
	private String firstName;
	private String lastName;
	private String address;
	private String serviceType;
	private Long contractCount;
	private Double totalCost;
}
