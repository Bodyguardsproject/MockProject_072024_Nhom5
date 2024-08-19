package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Bodyguard;
import java.util.Optional;

import com.bodyguards.bodyguards_us.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BodyguardRepository extends JpaRepository<Bodyguard, Long> {
	Optional<Bodyguard> findById(Long id);

	Bodyguard findByUser(User user);
}
