package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Services;
import com.bodyguards.bodyguards_us.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {
    Optional<Services> findByIdService(Long idService);

    boolean existsByIdService(Long idService);
}
