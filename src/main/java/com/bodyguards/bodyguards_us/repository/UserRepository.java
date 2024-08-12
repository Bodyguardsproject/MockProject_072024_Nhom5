/*
 *  UserRepository
 *  @author: Minhhieuano
 *  @created 8/12/2024 10:03 AM
 * */


package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
