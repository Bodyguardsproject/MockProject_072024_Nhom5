package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.EquipmentRequest;
import com.bodyguards.bodyguards_us.entity.Equipment;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.EquipmentMapper;
import com.bodyguards.bodyguards_us.repository.EquipmentRepository;
import com.bodyguards.bodyguards_us.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    @Autowired
    EquipmentRepository equipmentRepository;

    @Autowired
    EquipmentMapper equipmentMapper;

    @Override
    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }

    @Override
    public Equipment getEquipmentById(Long id) {
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(() -> new RuntimeException("This equipment doesn't exsit"));
        return equipment;
    }

    @Override
    public Equipment createNewEquipment(EquipmentRequest request) {
        if (equipmentRepository.findByEquipmentName(request.getEquipmentName()).isPresent())
            throw new ApiException(ErrorCode.EQUIPMENT_ALREADY_EXISTED);
        Equipment equipment = equipmentMapper.toEquipment(request);
        equipment.setDelFlag(0);
        return equipmentRepository.save(equipment);
    }

    @Override
    public Equipment updateEquipmentById(Long id, EquipmentRequest request) {
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(() -> new RuntimeException("This equipment doesn't exsit"));
        if (!request.getEquipmentName().equals(equipment.getEquipmentName()) && equipmentRepository.findByEquipmentName(request.getEquipmentName()).isPresent())
            throw new RuntimeException("This equipment exists");
        equipmentMapper.updateEquipment(request, equipment);
        return equipmentRepository.save(equipment);
    }

    @Override
    public void deleteEquipmentById(Long id) {
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(() -> new RuntimeException("This equipment doesn't exsit"));
        equipment.setDelFlag(1);
        equipmentRepository.save(equipment);
    }
}
