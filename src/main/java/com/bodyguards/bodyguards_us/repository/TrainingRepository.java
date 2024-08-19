package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long> {

    @Query(value = "select tt.id_training as training_id, tt.*, tsg.id_bodyguard as bodyguard_id \n" +
            "from tbl_training as tt \n" +
            "inner join tbl_sg_has_training as tsg on tt.id_training = tsg.id_training\n" +
            "where ((MONTH(date_start) = :month and YEAR(date_start) = :year) or\n" +
            "(MONTH(date_end) = :month and YEAR(date_end) = :year))\n" +
            "and tsg.id_bodyguard = :userId", nativeQuery = true)
    List<Training> getTrainingByMonthAndYear(Integer month, Integer year, Long userId);
}
