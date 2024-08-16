/*
 *  User
 *  @author: Minhhieuano
 *  @created 8/8/2024 10:06 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.Gender;
import com.bodyguards.bodyguards_us.enums.UserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_user", indexes = @Index(columnList = "email"))
public class User extends BaseEntity implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUser;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
			name = "tbl_user_has_role",
			joinColumns = @JoinColumn(name = "id_role"),
			inverseJoinColumns = @JoinColumn(name = "id_user"))
	private List<Role> roles;

	@OneToMany(fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Training> trainings;

	@Column(length = 50, unique = true)
	private String email;

	@Column(length = 50)
	private String firstName;

	@Column(length = 50)
	private String lastName;

	private String address;

	private String avatar;

	private Date dateOfBirth;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(length = 20)
	private String phone;

	@Column(length = 100)
	private String password;

	@Enumerated(EnumType.STRING)
	private UserStatus status;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return roles.stream()
				.map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName().toString()))
				.toList();
	}

	@Override
	public String getUsername() {
		return email;
	}
}
