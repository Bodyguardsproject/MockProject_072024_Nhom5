/*
 *  DayOffRequest
 *  @author: Minhhieuano
 *  @created 8/8/2024 3:17 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.DayOffStatus;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_day_off_request")
public class DayOffRequest extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDayOff;

	@ManyToOne
	@JoinColumn(name = "id_bodyguard")
	private Bodyguard bodyguard;

	private Date dateStart;

	private Date dateEnd;

	@Column(length = 2000)
	private String reason;

	@Enumerated(EnumType.STRING)
	private DayOffStatus status = DayOffStatus.IN_PROGRESS;
}
