package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.AddAccountRequest;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.UserMapper;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final UserMapper userMapper;
	private final PasswordEncoder passwordEncoder;

	@Override
	public List<User> findByEmailContaining(String email) {
		List<User> users = userRepository.findByEmailContaining(email);
		if (users.isEmpty()) throw new ApiException(ErrorCode.USER_NOT_FOUND);
		return users;
	}

	@Override
	public String addAccount(AddAccountRequest request) {
		if (userRepository.existsByEmail(request.getEmail())) {
			throw new ApiException(ErrorCode.USER_ALREADY_EXISTED);
		}

		User user = userMapper.addAccountRequestToUser(request);
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		List<Role> roles = roleRepository.findByNameIn(request.getRoles());

		user.setRoles(roles);

		userRepository.save(user);

		return "Create account successfully!";
	}
}