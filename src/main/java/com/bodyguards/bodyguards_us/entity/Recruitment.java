/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
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
@Table(name = "tbl_recruitment")
public class Recruitment extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idRecruitment;

	private String recruitmentName;

	private String status;

	private Integer quantity;

	@Column(length = 5000)
	private String description;

	@ManyToMany
	private List<Services> services;

	@OneToMany(mappedBy = "recruitment")
	private List<ApplyRecruitment> applyRecruitments;
}
