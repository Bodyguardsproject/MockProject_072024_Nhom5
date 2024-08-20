package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.DayOffRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DayOffRepository extends JpaRepository<DayOffRequest, Long> {

    @Query(value = "select count (*) " +
            "from tbl_day_off_request as tdo " +
            "inner join tbl_schedule as ts on tdo.id_day_off = ts.id_dayoff " +
            "where tdo.id_bodyguard = :bodyguardId and tdo.status = 'APPROVAL'", nativeQuery = true)
    Long countDayOff(Long bodyguardId);
}
