package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Services;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {

    Optional<Services> findByIdService(Long idService);

    Optional<Services> findByName(String name);

    boolean existsByIdService(Long idService);

	Optional<Services> findByIdService(Long idService);

	boolean existsByIdService(Long idService);

}
