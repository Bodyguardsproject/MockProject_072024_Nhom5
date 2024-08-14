/*
 *  Schedule
 *  @author: Minhhieuano
 *  @created 8/8/2024 3:15 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.ScheduleStatus;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_schedule")
public class Schedule extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSchedule;

	@ManyToOne
	@JoinColumn(name = "id_bodyguard")
	private Bodyguard bodyguard;

	@ManyToOne
	@JoinColumn(name = "id_dayoff")
	private DayOffRequest dayOffRequest;

	@ManyToOne
	@JoinColumn(name = "id_training")
	private Training training;

	private Date startTime;

	private Date endTime;

	private Date breakTime;

	@Enumerated(EnumType.STRING)
	private ScheduleStatus status;
}
