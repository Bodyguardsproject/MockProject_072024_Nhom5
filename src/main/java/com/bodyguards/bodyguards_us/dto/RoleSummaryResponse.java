/*
 *  RoleSummaryResponse
 *  @author: Minhhieuano
 *  @created 8/17/2024 8:25 AM
 * */


package com.bodyguards.bodyguards_us.dto;

import com.bodyguards.bodyguards_us.enums.UserRole;
import lombok.Data;

@Data
public class RoleSummaryResponse {
    private UserRole role;
    private int totalMember;
}
