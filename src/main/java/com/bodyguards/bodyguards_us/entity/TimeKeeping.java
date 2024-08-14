/*
 *  TimeKeeping
 *  @author: Minhhieuano
 *  @created 8/8/2024 3:28 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.TimeKeepingStatus;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_time_keeping")
public class TimeKeeping extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTimeKeeping;

	@ManyToOne
	@JoinColumn(name = "id_schedule")
	private Schedule schedule;

	private Date timeIn;

	private Date timeOut;

	@Enumerated(EnumType.STRING)
	private TimeKeepingStatus status;
}
