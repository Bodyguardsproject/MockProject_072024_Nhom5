package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import com.bodyguards.bodyguards_us.entity.Services;
import org.springframework.stereotype.Component;

@Component
public class ServiceMapper {

    public ServiceResponse toDTO(Services service) {
        if (service == null) {
            return null;
        }
        ServiceResponse dto = new ServiceResponse();
        dto.setIdService(service.getIdService());
        dto.setName(service.getName());
        dto.setImage(service.getImage());
        dto.setDescription(service.getDescription());
        return dto;
    }

    public Services toEntity(ServiceResponse dto) {
        if (dto == null) {
            return null;
        }
        Services service = new Services();
        service.setIdService(dto.getIdService());
        service.setName(dto.getName());
        service.setImage(dto.getImage());
        service.setDescription(dto.getDescription());
        return service;
    }
}
