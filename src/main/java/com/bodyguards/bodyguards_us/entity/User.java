/*
 *  User
 *  @author: Minhhieuano
 *  @created 8/8/2024 10:06 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.Gender;
import com.bodyguards.bodyguards_us.enums.UserStatus;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_user")
public class User extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUser;

	@ManyToMany
	@JoinTable(
			name = "tbl_user_has_role",
			joinColumns = @JoinColumn(name = "id_role"),
			inverseJoinColumns = @JoinColumn(name = "id_user"))
	private List<Role> roles;

	@OneToMany(fetch = FetchType.LAZY)
	private List<Training> trainings;

	@Column(length = 50, unique = true)
	private String email;

	@Column(length = 50)
	private String firstName;

	@Column(length = 50)
	private String lastName;

	private String address;

	private Date dateOfBirth;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(length = 12)
	private String phone;

	@Column(length = 100)
	private String password;

	@Enumerated(EnumType.STRING)
	private UserStatus status;
}
