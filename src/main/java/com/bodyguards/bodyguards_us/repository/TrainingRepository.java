package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long> {
}
