package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BodyguardRepository extends JpaRepository<Bodyguard, Long> {
    Optional<Bodyguard> findById(Long id);
}
