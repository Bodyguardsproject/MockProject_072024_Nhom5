package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.EquipmentRequest;
import com.bodyguards.bodyguards_us.entity.Equipment;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface EquipmentMapper {

	public Equipment toEquipment(EquipmentRequest request);

	void updateEquipment(EquipmentRequest request, @MappingTarget Equipment equipment);
}
