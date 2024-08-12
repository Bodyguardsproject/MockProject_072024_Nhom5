/*
 *  AuthServiceImpl
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:30 AM
 * */


package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.AuthenticationResponse;
import com.bodyguards.bodyguards_us.dto.CreateAccountRequest;
import com.bodyguards.bodyguards_us.dto.TokenResponse;
import com.bodyguards.bodyguards_us.dto.UserResponse;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.UserMapper;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.AuthService;
import com.bodyguards.bodyguards_us.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final RoleRepository roleRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthenticationResponse register(CreateAccountRequest request) {

        User user = userMapper.createAccountRequestToUser(request);

        Role role = roleRepository.findByName(UserRole.USER).orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));

        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRoles(List.of(role));

        User newUser = userRepository.save(user);
        UserResponse userResponse = userMapper.userToUserResponse(newUser);

        TokenResponse tokenResponse = jwtService.generateTokenPair(new UsernamePasswordAuthenticationToken(newUser, null, newUser.getAuthorities()));

        return AuthenticationResponse
                .builder()
                .tokens(tokenResponse)
                .user(userResponse)
                .build();
    }
}
