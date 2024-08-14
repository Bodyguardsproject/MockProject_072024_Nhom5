package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.ServiceDTO;
import com.bodyguards.bodyguards_us.entity.Services;
import org.springframework.stereotype.Component;

@Component
public class ServiceMapper {

    public ServiceDTO toDTO(Services service) {
        if (service == null) {
            return null;
        }
        ServiceDTO dto = new ServiceDTO();
        dto.setIdService(service.getIdService());
        dto.setName(service.getName());
        dto.setImage(service.getImage());
        dto.setDescription(service.getDescription());
        return dto;
    }

    public Services toEntity(ServiceDTO dto) {
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
