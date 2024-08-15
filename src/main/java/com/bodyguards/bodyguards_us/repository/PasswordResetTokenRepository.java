/*
 *  UserOTPRepository
 *  @author: Minhhieuano
 *  @created 8/14/2024 10:35 PM
 * */

package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.PasswordResetToken;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, String> {
	Optional<PasswordResetToken> findByToken(String token);
}
