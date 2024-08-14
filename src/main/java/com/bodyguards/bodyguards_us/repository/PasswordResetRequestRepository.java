/*
 *  PasswordResetRequestRepository
 *  @author: Minhhieuano
 *  @created 8/15/2024 12:08 AM
 * */

package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.PasswordResetRequest;
import java.time.LocalDateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasswordResetRequestRepository extends JpaRepository<PasswordResetRequest, Long> {
	int countByUserIdAndRequestTimeBetween(Long userId, LocalDateTime startDate, LocalDateTime endDate);
}
