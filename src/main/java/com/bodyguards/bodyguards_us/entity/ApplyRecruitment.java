package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "tbl_apply_recruitment")
public class ApplyRecruitment extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idApply;

	@ManyToOne
	@JoinColumn(name = "id_recruitment", referencedColumnName = "idRecruitment")
	private Recruitment recruitment;

	private String email;

	private String cvUrl;

	private String firstName;

	private String lastName;

	private String streetAddress;

	private String city;

	private String country;

	private String state;

	private String zipCode;

	private String phone;

	private String status;

	private Integer delflag;
}
