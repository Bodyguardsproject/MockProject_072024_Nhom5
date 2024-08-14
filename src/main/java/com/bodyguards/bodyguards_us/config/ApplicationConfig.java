/*
 *  ApplicationConfig
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:52 AM
 * */

package com.bodyguards.bodyguards_us.config;

import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.security.AdminAccountConfigProperties;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
@Slf4j
@EnableConfigurationProperties({AdminAccountConfigProperties.class})
public class ApplicationConfig implements CommandLineRunner {

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final AdminAccountConfigProperties adminAccountConfigProperties;
	private final PasswordEncoder passwordEncoder;

	@Value("${spring.profiles.active}")
	private String activeProfile;

	private void initRoleDevelopment() {
		if (roleRepository.existsByName(UserRole.ADMIN)) return;

		log.info("Create all role only development");
		List<Role> roles = new ArrayList<>();
		for (UserRole role : UserRole.values()) {
			roles.add(Role.builder().name(role).description(role.name()).build());
		}
		roleRepository.saveAll(roles);
	}

	private void initRoleProduction() {
		if (roleRepository.existsByName(UserRole.ADMIN)) return;
		log.info("Create admin role");

		Role role =
				Role.builder().name(UserRole.ADMIN).description("System admin").build();

		roleRepository.save(role);
	}

	private void initAdminAccount() {
		String adminEmail = adminAccountConfigProperties.email();
		String adminPassword = adminAccountConfigProperties.password();
		Role adminRole = roleRepository
				.findByName(UserRole.ADMIN)
				.orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));

		if (userRepository.existsByEmail(adminEmail)) return;

		User user = User.builder()
				.email(adminEmail)
				.password(passwordEncoder.encode(adminPassword))
				.roles(List.of(adminRole))
				.build();
		userRepository.save(user);

		if (!activeProfile.equals("prod")) {
			log.info(
					"Initial admin account with email: {} and password: {} (only development)",
					adminEmail,
					adminPassword);
		}
	}

	@Override
	public void run(String... args) throws Exception {
		if (activeProfile.equals("prod")) initRoleProduction();
		else initRoleDevelopment();
		initAdminAccount();
	}
}
