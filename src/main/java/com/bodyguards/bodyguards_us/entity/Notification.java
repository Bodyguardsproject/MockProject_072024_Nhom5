/*
 *  Notification
 *  @author: Minhhieuano
 *  @created 8/8/2024 11:43 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_notification")
public class Notification extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idNotification;

	@ManyToOne
	@JoinColumn(name = "id_user")
	private User user;

	private String title;

	@Column(length = 500)
	private String notificationContent;

	private Date notificationDate;
}
