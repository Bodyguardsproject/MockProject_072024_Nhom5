package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentDetailResponse;
import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentResponse;
import java.util.List;

public interface ApplyRecruitmentService {

	List<String> getAllRecruitmentNames();

	List<ApplyRecruitmentResponse> getApplicantsByRecruitment(Long recruitmentId);

	ApplyRecruitmentDetailResponse getApplicantDetails(Long applicantId);

	void updateApplicantStatus(Long applicantId, String status);

	List<ApplyRecruitmentResponse> searchApplicantsByName(Long recruitmentId, String name);
}
