/*
 *  UserOTP
 *  @author: Minhhieuano
 *  @created 8/14/2024 10:30 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_forgot_password_token")
public class PasswordResetToken extends BaseEntity {

	protected boolean isUsed;

	private String token;

	@Id
	private Long userId;

	private LocalDateTime expiredAt;
}
