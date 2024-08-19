package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.ApplyRecruitment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplyRecruitmentRepository extends JpaRepository<ApplyRecruitment, Long> {

    List<ApplyRecruitment> findByRecruitment_IdRecruitment(Long recruitmentId);

    List<ApplyRecruitment> findByRecruitment_IdRecruitmentAndFirstNameContaining(Long recruitmentId, String name);

    @Query("SELECT r.recruitmentName FROM Recruitment r")
    List<String> findAllRecruitmentNames();
}
