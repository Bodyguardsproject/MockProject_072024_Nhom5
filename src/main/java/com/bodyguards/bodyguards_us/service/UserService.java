package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.AddAccountRequest;
import com.bodyguards.bodyguards_us.entity.User;

import java.util.List;

public interface UserService {

    List<User> findByEmailContaining(String email);

    String addAccount(AddAccountRequest request);

}
