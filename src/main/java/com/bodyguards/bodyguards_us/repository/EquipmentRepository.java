package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    public Optional<Equipment> findByEquipmentName(String name);
}
