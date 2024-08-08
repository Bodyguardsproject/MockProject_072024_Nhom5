/*
 *  Appointment
 *  @author: Minhhieuano
 *  @created 8/8/2024 11:35 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.AppointmentStatus;
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
@Table(name = "tbl_appointment")
public class Appointment extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAppointment;

	private Date appointmentDate;

	private String appointmentLocation;

	@Enumerated(EnumType.STRING)
	private AppointmentStatus appointmentStatus;

	@ManyToOne
	@JoinColumn(name = "id_customer")
	private User customer;

	@ManyToMany
	@JoinTable(
			name = "tbl_appointment_has_sg",
			joinColumns = @JoinColumn(name = "id_bodyguard"),
			inverseJoinColumns = @JoinColumn(name = "id_appointment"))
	private List<Bodyguard> bodyguards;
}
