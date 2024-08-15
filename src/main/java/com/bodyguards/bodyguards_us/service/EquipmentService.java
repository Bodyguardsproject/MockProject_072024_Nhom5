package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.EquipmentRequest;
import com.bodyguards.bodyguards_us.entity.Equipment;

import java.util.List;

public interface EquipmentService {

    public List<Equipment> getAllEquipment();

    public Equipment getEquipmentById(Long id);

    public Equipment createNewEquipment(EquipmentRequest request);

    public Equipment updateEquipmentById(Long id, EquipmentRequest request);

    public void deleteEquipmentById(Long id);
}
