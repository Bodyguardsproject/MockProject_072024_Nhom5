package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.ServiceRequest;
import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import com.bodyguards.bodyguards_us.entity.Services;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ServiceMapper {


    @Mapping(source = "name", target = "name")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "description", target = "description")
    Services toEntity(ServiceRequest serviceRequest);

    @Mapping(source = "idService", target = "idService")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "description", target = "description")
    ServiceResponse toDTO(Services service);


	ServiceResponse toDTO(Services service);

	Services toEntity(ServiceResponse dto);

}
