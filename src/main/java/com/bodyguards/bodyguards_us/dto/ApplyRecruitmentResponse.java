package com.bodyguards.bodyguards_us.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ApplyRecruitmentResponse {
	private Long idApply;
	private String firstName;
	private String lastName;
	private String status;
	private String recruitmentName;
}
