package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Equipment;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
	public Optional<Equipment> findByEquipmentName(String name);
}
