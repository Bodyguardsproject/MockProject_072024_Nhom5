package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.DayOffRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DayOffRequestRepository extends JpaRepository<DayOffRequest, Long> {

    List<DayOffRequest> findAll();
}
