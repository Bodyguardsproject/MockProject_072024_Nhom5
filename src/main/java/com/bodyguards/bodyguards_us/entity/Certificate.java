/*
 *  Certificate
 *  @author: Minhhieuano
 *  @created 8/8/2024 3:05 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.CertificateStatus;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_certificate")
public class Certificate extends BaseEntity {

	@Id
	private Long idCertificate;

	private String certificateType;

	@Enumerated(EnumType.STRING)
	private CertificateStatus status;
}
