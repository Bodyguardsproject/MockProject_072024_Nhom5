/*
 *  RsaAccessTokenKeyConfigProperties
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:22 AM
 * */

package com.bodyguards.bodyguards_us.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "jwt.key.access-token")
public record RsaAccessTokenKeyConfigProperties(String publicKey, String privateKey, Long expireIn) {}
