package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentDetailResponse;
import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentResponse;
import com.bodyguards.bodyguards_us.entity.ApplyRecruitment;
import com.bodyguards.bodyguards_us.mapper.ApplyRecruitmentMapper;
import com.bodyguards.bodyguards_us.repository.ApplyRecruitmentRepository;
import com.bodyguards.bodyguards_us.service.ApplyRecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyRecruitmentServiceImpl implements ApplyRecruitmentService {

    @Autowired
    private ApplyRecruitmentRepository applyRecruitmentRepository;

    @Autowired
    private ApplyRecruitmentMapper applyRecruitmentMapper;


    @Override
    public List<String> getAllRecruitmentNames() {
        return applyRecruitmentRepository.findAllRecruitmentNames();
    }

    @Override
    public List<ApplyRecruitmentResponse> getApplicantsByRecruitment(Long recruitmentId) {
        List<ApplyRecruitment> applicants = applyRecruitmentRepository.findByRecruitment_IdRecruitment(recruitmentId);
        return applicants.stream()
                .map(applyRecruitmentMapper::toApplyRecruimentResponse)
                .toList();
    }

    @Override
    public ApplyRecruitmentDetailResponse getApplicantDetails(Long applicantId) {
        ApplyRecruitment applicant = applyRecruitmentRepository.findById(applicantId)
                .orElseThrow(() -> new RuntimeException("Applicant not found"));
        return applyRecruitmentMapper.toApplyRecruimentDetailResponse(applicant);
    }

    @Override
    public void updateApplicantStatus(Long applicantId, String status) {
        ApplyRecruitment applicant = applyRecruitmentRepository.findById(applicantId)
                .orElseThrow(() -> new RuntimeException("Applicant not found"));
        applicant.setStatus(status);
        applyRecruitmentRepository.save(applicant);
    }

    @Override
    public List<ApplyRecruitmentResponse> searchApplicantsByName(Long recruitmentId, String name) {
        List<ApplyRecruitment> applicants = applyRecruitmentRepository.findByRecruitment_IdRecruitmentAndFirstNameContaining(recruitmentId, name);
        return applicants.stream()
                .map(applyRecruitmentMapper::toApplyRecruimentResponse)
                .toList();
    }
}
