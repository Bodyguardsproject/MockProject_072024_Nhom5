/*
 *  RoleRepository
 *  @author: Minhhieuano
 *  @created 8/12/2024 12:00 PM
 * */

package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.enums.UserRole;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	boolean existsByName(UserRole name);

	Optional<Role> findByName(UserRole name);
}
