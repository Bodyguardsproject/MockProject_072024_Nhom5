/*
 *  CertificateBodyguard
 *  @author: Minhhieuano
 *  @created 8/8/2024 3:09 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.entity.id.CertificateBodyguardId;
import jakarta.persistence.*;
import java.util.Date;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_certificate_sg")
public class CertificateBodyguard extends BaseEntity {
	@EmbeddedId
	private CertificateBodyguardId id;

	@ManyToOne
	@MapsId("idCertificate")
	@JoinColumn(name = "id_order")
	private Certificate certificate;

	@ManyToOne
	@MapsId("idBodyguard")
	@JoinColumn(name = "id_bodyguard")
	private Bodyguard bodyguard;

	private String linkCertificate;

	private Date expirationDate;
}
