/*
 *  RoleRepository
 *  @author: Minhhieuano
 *  @created 8/12/2024 12:00 PM
 * */

package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.dto.RoleSummaryResponse;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.enums.UserRole;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	boolean existsByName(UserRole name);

	Optional<Role> findByName(UserRole name);

	List<Role> findByNameIn(List<UserRole> names);

	@Query(
			"select new com.bodyguards.bodyguards_us.dto.RoleSummaryResponse(r.name, count(u.idUser), r.createdDate, r.modifiedDate) from Role r left join r.users u group by r.name, r.createdDate, r.modifiedDate")
	List<RoleSummaryResponse> getAllRole();
}
