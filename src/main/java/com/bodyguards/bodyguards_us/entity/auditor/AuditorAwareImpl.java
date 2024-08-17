/*
 *  AuditorAwareImpl
 *  @author: Minhhieuano
 *  @created 8/17/2024 9:46 AM
 * */

package com.bodyguards.bodyguards_us.entity.auditor;

import java.util.Optional;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class AuditorAwareImpl implements AuditorAware<String> {
	@Override
	public Optional<String> getCurrentAuditor() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (authentication == null || !authentication.isAuthenticated()) {
			return Optional.empty();
		}

		return Optional.of(authentication.getName());
	}
}
