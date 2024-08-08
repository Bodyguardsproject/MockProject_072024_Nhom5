/*
 *  Review
 *  @author: Minhhieuano
 *  @created 8/8/2024 10:31 AM
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
@Table(name = "tbl_reviews")
public class Review extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idReview;

	@ManyToOne
	private Bodyguard bodyguard;

	@ManyToOne
	private User supervisor;

	private int rating;

	@Column(length = 1000)
	private String reviewText;
}
