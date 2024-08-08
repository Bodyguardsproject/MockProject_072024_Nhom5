/*
 *  OrderBodyguardKey
 *  @author: Minhhieuano
 *  @created 8/8/2024 2:43 PM
 * */

package com.bodyguards.bodyguards_us.entity.id;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderBodyguardId {
	private Long idOrder;

	private Long idBodyguard;
}
