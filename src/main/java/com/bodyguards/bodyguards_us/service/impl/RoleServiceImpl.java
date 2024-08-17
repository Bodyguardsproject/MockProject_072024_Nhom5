/*
 *  RoleServiceImpl
 *  @author: Minhhieuano
 *  @created 8/17/2024 9:00 AM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.RoleSummaryResponse;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.service.RoleService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
	private final RoleRepository roleRepository;

	@Override
	public List<RoleSummaryResponse> getAllRole() {
		return roleRepository.getAllRole();
	}
}
