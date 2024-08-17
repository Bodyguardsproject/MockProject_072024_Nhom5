/*
 *  RoleService
 *  @author: Minhhieuano
 *  @created 8/17/2024 9:00 AM
 * */

package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.RoleSummaryResponse;
import java.util.List;

public interface RoleService {
	List<RoleSummaryResponse> getAllRole();
}
