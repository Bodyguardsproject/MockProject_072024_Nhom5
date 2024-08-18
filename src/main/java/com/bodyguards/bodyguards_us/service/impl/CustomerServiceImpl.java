package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.CustomerResponse;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.entity.Cost;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.mapper.UserMapper;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<CustomerResponse> getAllCustomers() {
        // Get all User with role 'CUSTOMER'
        List<User> users = userRepository.findAllByRolesName(UserRole.CUSTOMER);

        // Convert the User list to the CustomerResponse list
        return users.stream()
                .map(userMapper::toCustomerResponse)
                .collect(Collectors.toList());
    }

}
