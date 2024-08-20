package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentDetailResponse;
import com.bodyguards.bodyguards_us.dto.ApplyRecruitmentResponse;
import com.bodyguards.bodyguards_us.entity.ApplyRecruitment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ApplyRecruitmentMapper {

	@Mapping(source = "recruitment.recruitmentName", target = "recruitmentName")
	ApplyRecruitmentResponse toApplyRecruimentResponse(ApplyRecruitment applyRecruitment);

	@Mapping(source = "recruitment.recruitmentName", target = "recruitmentName")
	ApplyRecruitmentDetailResponse toApplyRecruimentDetailResponse(ApplyRecruitment applyRecruitment);
}
