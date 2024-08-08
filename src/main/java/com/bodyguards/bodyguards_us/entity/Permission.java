/*
 *  Permission
 *  @author: Minhhieuano
 *  @created 8/8/2024 10:45 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.UserPermission;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_permission")
public class Permission extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPermission;

	@Enumerated(EnumType.STRING)
	@Column(unique = true, name = "permission_name")
	private UserPermission name;
}
