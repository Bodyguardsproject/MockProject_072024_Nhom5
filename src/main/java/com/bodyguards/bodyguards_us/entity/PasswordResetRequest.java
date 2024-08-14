/*
 *  PasswordResetRequest
 *  @author: Minhhieuano
 *  @created 8/15/2024 12:06 AM
 * */


package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_password_reset_request")
public class PasswordResetRequest extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime requestTime;

    private Long userId;
}
