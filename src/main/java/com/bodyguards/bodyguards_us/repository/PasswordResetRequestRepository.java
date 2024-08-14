/*
 *  PasswordResetRequestRepository
 *  @author: Minhhieuano
 *  @created 8/15/2024 12:08 AM
 * */


package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.PasswordResetRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface PasswordResetRequestRepository extends JpaRepository<PasswordResetRequest, Long> {
    int countByUserIdAndRequestTimeBetween(Long userId, LocalDateTime startDate, LocalDateTime endDate);
}
