package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.AddAccountRequest;
import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.UserMapper;
import com.bodyguards.bodyguards_us.repository.BodyguardRepository;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final BodyguardRepository bodyguardRepository;

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

        User newUser = userRepository.save(user);

        if (
                request.getRoles().contains(UserRole.SUPERVISOR) ||
                        request.getRoles().contains(UserRole.BODYGUARD)
        ) {
            Bodyguard bodyguard = Bodyguard.builder()
                    .experience(request.getExperience())
                    .build();
            bodyguard.setUser(newUser);
            bodyguardRepository.save(bodyguard);
        }

        return "Create account successfully!";
    }
}
