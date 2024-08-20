package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    @Query(value = "select * from tbl_schedule\n" +
            "where start_time between :startDate and :endDate\n" +
            "and id_bodyguard= :id_bodyguard", nativeQuery = true)
    public List<Schedule> getScheduleByWeekAndUser(LocalDate startDate, LocalDate endDate, Long id_bodyguard);

    public Schedule findByBodyguardAndIdSchedule(Bodyguard bodyguard, Long idSchedule);
}
