/*
 *  Training
 *  @author: Minhhieuano
 *  @created 8/8/2024 2:54 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_training")
public class Training extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTraining;

	@ManyToOne
	@JoinColumn(name = "id_supervisor")
	private User supervisor;

	@ManyToMany
	@JoinTable(
			name = "tbl_sg_has_training",
			joinColumns = @JoinColumn(name = "id_bodyguard"),
			inverseJoinColumns = @JoinColumn(name = "id_training"))
	private List<Bodyguard> bodyguards;

	private String nameTraining;

	@Column(length = 5000)
	private String description;

	private String fileUrl;

	private Date dateCreated;

	private Date dateStart;

	private Date dateEnd;
}
