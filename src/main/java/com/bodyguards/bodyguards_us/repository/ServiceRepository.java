/*
 *  ServiceRepository
 *  @author: Minhhieuano
 *  @created 8/14/2024 8:52 PM
 * */


package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {
    Optional<Services> findByIdService(Long idService);

}