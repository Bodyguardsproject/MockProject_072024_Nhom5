package com.bodyguards.bodyguards_us.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ApplyRecruitmentDetailResponse {
	private Long idApply;
	private String email;
	private String cvUrl;
	private String firstName;
	private String lastName;
	private String streetAddress;
	private String city;
	private String country;
	private String state;
	private String zipCode;
	private String phone;
	private String status;
	private String recruitmentName;
}
