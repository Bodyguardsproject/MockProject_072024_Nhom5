package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentDetailResponse;
import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.service.ApplyRecruitmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staff")
@RequiredArgsConstructor
public class ApplyRecruitmentController {

    @Autowired
    private ApplyRecruitmentService applyRecruitmentService;

    @GetMapping("/recruitments/name")
    public ResponseEntity<ApiResponse<List<String>>> getAllRecruitmentNames() {
        List<String> recruitmentNames = applyRecruitmentService.getAllRecruitmentNames();
        return ResponseEntity.ok(ApiResponse.success(recruitmentNames));
    }

    @GetMapping("/recruitments/{recruitmentId}/applicants")
    public ResponseEntity<ApiResponse<List<ApplyRecruitmentResponse>>> getApplicantsByRecruitment(@PathVariable Long recruitmentId) {
        List<ApplyRecruitmentResponse> applicants = applyRecruitmentService.getApplicantsByRecruitment(recruitmentId);
        if (applicants.isEmpty()) {
            throw new ApiException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        return ResponseEntity.ok(ApiResponse.success(applicants));
    }

    @GetMapping("/applicants/{applicantId}")
    public ResponseEntity<ApiResponse<ApplyRecruitmentDetailResponse>> getApplicantDetails(@PathVariable Long applicantId) {
        ApplyRecruitmentDetailResponse applicantDetails = applyRecruitmentService.getApplicantDetails(applicantId);
        if (applicantDetails == null) {
            throw new ApiException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        return ResponseEntity.ok(ApiResponse.success(applicantDetails));
    }

    @PatchMapping("/applicants/{applicantId}/accept")
    public ResponseEntity<ApiResponse<String>> acceptApplicant(@PathVariable Long applicantId) {
        try {
            applyRecruitmentService.updateApplicantStatus(applicantId, "Accepted");
            return ResponseEntity.ok(ApiResponse.success("Applicant accepted."));
        } catch (Exception e) {
            throw new ApiException(ErrorCode.APPLICANT_NOT_FOUND);
        }
    }

    @PatchMapping("/applicants/{applicantId}/deny")
    public ResponseEntity<ApiResponse<String>> denyApplicant(@PathVariable Long applicantId) {
        try {
            applyRecruitmentService.updateApplicantStatus(applicantId, "Denied");
            return ResponseEntity.ok(ApiResponse.success("Applicant denied."));
        } catch (Exception e) {
            throw new ApiException(ErrorCode.APPLICANT_NOT_FOUND);
        }
    }

    @GetMapping("/recruitments/{recruitmentId}/applicants/search")
    public ResponseEntity<ApiResponse<List<ApplyRecruitmentResponse>>> searchApplicants(@PathVariable Long recruitmentId, @RequestParam String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new ApiException(ErrorCode.REQUEST_VALIDATION_FAILED);
        }
        List<ApplyRecruitmentResponse> applicants = applyRecruitmentService.searchApplicantsByName(recruitmentId, name);
        if (applicants.isEmpty()) {
            throw new ApiException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        return ResponseEntity.ok(ApiResponse.success(applicants));
    }
}
