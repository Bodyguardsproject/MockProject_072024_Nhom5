package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.entity.User;

import java.util.List;

public interface UserService {

    public List<User> findByEmailContaining(String email);
}
