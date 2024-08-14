package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> findByEmailContaining(String email) {
        List<User> users = userRepository.findByEmailContaining(email);
        if (users.isEmpty())
            throw new ApiException(ErrorCode.USER_NOT_FOUND);
        return users;
    }
}
