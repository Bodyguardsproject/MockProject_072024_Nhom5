/*
 *  RoleSummaryResponse
 *  @author: Minhhieuano
 *  @created 8/17/2024 8:25 AM
 * */

package com.bodyguards.bodyguards_us.dto;

import com.bodyguards.bodyguards_us.enums.UserRole;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RoleSummaryResponse {
	private UserRole role;
	private Long totalMember;
	private Date createdDate;
	private Date modifiedDate;
}
