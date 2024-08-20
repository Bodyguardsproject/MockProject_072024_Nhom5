/*
 *  Order
 *  @author: Minhhieuano
 *  @created 8/8/2024 11:49 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.OrderStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_order")
public class Order extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idOrder;

	@ManyToOne
	@JoinColumn(name = "id_user")
	private User user;

	@ManyToMany
	@JoinTable(
			name = "tbl_order_has_equipment",
			joinColumns = @JoinColumn(name = "id_order"),
			inverseJoinColumns = @JoinColumn(name = "id_equipment"))
	private List<Equipment> equipments;

	@ManyToMany
	@JoinTable(
			name = "tbl_order_has_bodyguards",
			joinColumns = @JoinColumn(name = "id_order"),
			inverseJoinColumns = @JoinColumn(name = "id_bodyguard"))
	private List<Bodyguard> bodyguards;

	@ManyToOne
	@JoinColumn(name = "id_supervisor")
	private Bodyguard supervisor;

	private String levelOfProtection;

	private String location;

	private String travelSchedule;

	private Integer numberOfSecurityGuard;

	private Long totalAmount;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "order", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<OrderDate> orderDates;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_service")
	private Services services;

	@Enumerated(EnumType.STRING)
	@Builder.Default
	private OrderStatus status = OrderStatus.IN_PROGRESS;

	@Column(length = 1000)
	private String note;

	@OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
	private List<Contract> contracts;
}
