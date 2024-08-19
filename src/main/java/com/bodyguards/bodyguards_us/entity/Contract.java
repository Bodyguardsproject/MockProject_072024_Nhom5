/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.ContractStatus;
import jakarta.persistence.*;
import java.util.List;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_contract")
public class Contract extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idContract;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_order")
	private Order order;

	private String contractName;

	private String contractFile;

	@Enumerated(EnumType.STRING)
	private ContractStatus contractStatus;

	private Long totalAmount;

	@OneToMany(mappedBy = "contract", fetch = FetchType.LAZY)
	private List<Payment> payments;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "contract")
	private List<Cost> costs;

	private Double serviceCost;

	private Double equipmentCost;

	@OneToMany
	private List<Feedback> feedbacks;
}
