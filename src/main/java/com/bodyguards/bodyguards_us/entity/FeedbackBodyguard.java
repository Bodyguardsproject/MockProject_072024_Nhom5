/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.entity.id.FeedBodyguardId;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_feedback_service_sg")
public class FeedbackBodyguard extends BaseEntity {
	@EmbeddedId
	private FeedBodyguardId id;

	@ManyToOne
	@MapsId("idFeedback")
	@JoinColumn(name = "id_feedback")
	private Certificate certificate;

	@ManyToOne
	@MapsId("idBodyguard")
	@JoinColumn(name = "id_bodyguard")
	private Bodyguard bodyguard;

	private Double rating;

	@Column(length = 5000)
	private String comments;

	private Date feedbackDate;

	private String status;
}
