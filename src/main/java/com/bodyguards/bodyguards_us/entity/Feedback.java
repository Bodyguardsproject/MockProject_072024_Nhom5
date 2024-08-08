/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_feedback_service")
public class Feedback extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idFeedback;

	@ManyToOne
	@JoinColumn(name = "id_user")
	private User user;

	@ManyToOne
	@JoinColumn(name = "id_contract")
	private Contract contract;
}
