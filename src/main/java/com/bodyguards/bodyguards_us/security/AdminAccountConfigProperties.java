/*
 *  AdminAccountConfigProperties
 *  @author: Minhhieuano
 *  @created 8/12/2024 12:26 PM
 * */


package com.bodyguards.bodyguards_us.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "admin")
public record AdminAccountConfigProperties(String email, String password) {
}
