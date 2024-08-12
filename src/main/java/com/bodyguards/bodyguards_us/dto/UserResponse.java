/*
 *  UserResponse
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:43 AM
 * */


package com.bodyguards.bodyguards_us.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private Long id;
    private String email;
    private String fullName;
    private String phone;
}
