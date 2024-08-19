package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long> {

    @Query(value = "select * from tbl_training " +
            "where (MONTH(date_start) = :month and YEAR(date_start) = :year) " +
            "or (MONTH(date_end) = :month and YEAR(date_end) = :year)", nativeQuery = true)
    List<Training> getTrainingByMonthAndYear(Integer month, Integer year);
}
