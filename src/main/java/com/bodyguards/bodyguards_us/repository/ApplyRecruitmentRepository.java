package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.ApplyRecruitment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplyRecruitmentRepository extends JpaRepository<ApplyRecruitment, Long> {

	List<ApplyRecruitment> findByRecruitment_IdRecruitment(Long recruitmentId);

	List<ApplyRecruitment> findByRecruitment_IdRecruitmentAndFirstNameContaining(Long recruitmentId, String name);

	@Query("SELECT r.recruitmentName FROM Recruitment r")
	List<String> findAllRecruitmentNames();
}
