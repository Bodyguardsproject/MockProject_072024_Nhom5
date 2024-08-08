/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
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
@Table(name = "tbl_tax")
public class Tax extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTax;

	private String taxName;

	private String taxType;

	private Double taxRate;

	@Column(length = 1000)
	private String description;
}
