/*
 *  Payment
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:04 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.PaymentMethod;
import com.bodyguards.bodyguards_us.enums.PaymentStatus;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_payment")
public class Payment extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPayment;

	@ManyToOne
	@JoinColumn(name = "id_contract")
	private Contract contract;

	private Date paymentDate;

	private Long paymentAmount;

	@Enumerated(EnumType.STRING)
	private PaymentMethod paymentMethod;

	@Enumerated(EnumType.STRING)
	private PaymentStatus paymentStatus;
}
