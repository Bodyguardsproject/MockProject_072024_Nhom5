/*
 *  OrderBodyguard
 *  @author: Minhhieuano
 *  @created 8/8/2024 2:42 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.entity.id.OrderBodyguardId;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_order_has_bodyguards")
public class OrderBodyguard extends BaseEntity {
	@EmbeddedId
	private OrderBodyguardId id;

	@ManyToOne
	@MapsId("idOrder")
	@JoinColumn(name = "id_order")
	private Order order;

	@ManyToOne
	@MapsId("idBodyguard")
	@JoinColumn(name = "id_bodyguard")
	private Bodyguard bodyguard;

	private String mission;
}
