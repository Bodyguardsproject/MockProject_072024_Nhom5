/*
 *  UserRepository
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:03 AM
 * */

package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.UserRole;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);

	boolean existsByEmail(String email);

	List<User> findByEmailContaining(String email);

	@Query("SELECT u FROM User u JOIN u.roles r WHERE r.name = :roleName")
	List<User> findAllByRolesName(@Param("roleName") UserRole roleName);
}
