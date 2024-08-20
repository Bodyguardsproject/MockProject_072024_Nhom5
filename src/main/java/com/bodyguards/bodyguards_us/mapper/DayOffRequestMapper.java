package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.DayOffRequestResponse;
import com.bodyguards.bodyguards_us.entity.DayOffRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface DayOffRequestMapper {

    @Mapping(target = "idBodyguard", source = "bodyguard.idBodyguard")
    @Mapping(target = "bodyguardName", source = "bodyguard.user.firstName")
    @Mapping(target = "dateStart", source = "dateStart")
    @Mapping(target = "dateEnd", source = "dateEnd")
    DayOffRequestResponse toDto(DayOffRequest dayOffRequest);
}
