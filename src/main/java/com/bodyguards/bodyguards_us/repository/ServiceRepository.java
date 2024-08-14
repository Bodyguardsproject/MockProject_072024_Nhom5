package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Services;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ServiceRepository extends JpaRepository<Services, Long> {
    Optional<Services> findByIdService(Long idService);
}
