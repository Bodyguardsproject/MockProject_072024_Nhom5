/*
 *  Appointment
 *  @author: Minhhieuano
 *  @created 8/8/2024 11:35 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.EquipmentStatus;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_equipment")
public class Equipment extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idEquipment;

	private String equipmentName;

	private String equipmentType;

	@Column(length = 1000)
	private String description;

	private Date dateAdded;

	private Date lastMaintain;

	private Integer quantity;

	@Enumerated(EnumType.STRING)
	private EquipmentStatus status;
}
