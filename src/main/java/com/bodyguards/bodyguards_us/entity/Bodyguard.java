/*
 *  Bodyguards
 *  @author: Minhhieuano
 *  @created 8/8/2024 10:17 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_bodyguard")
public class Bodyguard extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdBodyguard;

	@OneToOne()
	@JoinColumn(name = "id_user", nullable = false, unique = true)
	private User user;

	@ManyToMany
	private List<Training> trainings;

	private int experience;

	private String availabilityStatus;

	private Double rating;

	private Double hourlyRate;
}
