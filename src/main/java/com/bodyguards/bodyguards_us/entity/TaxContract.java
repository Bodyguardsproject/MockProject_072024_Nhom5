/*
 *  OrderBodyguard
 *  @author: Minhhieuano
 *  @created 8/8/2024 2:42 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.entity.id.TaxContractId;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_tax_has_contract")
public class TaxContract extends BaseEntity {
	@EmbeddedId
	private TaxContractId id;

	@ManyToOne
	@MapsId("idTax")
	@JoinColumn(name = "id_tax")
	private Tax tax;

	@ManyToOne
	@MapsId("idContract")
	@JoinColumn(name = "id_contract")
	private Contract contract;

	private Double taxAmount;
}
