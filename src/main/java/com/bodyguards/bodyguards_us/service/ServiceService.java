package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import com.bodyguards.bodyguards_us.entity.Services;
import com.bodyguards.bodyguards_us.mapper.ServiceMapper;
import com.bodyguards.bodyguards_us.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceMapper serviceMapper;

    public List<ServiceResponse> getAllServices() {
        List<Services> services = serviceRepository.findAll();
        return services.stream()
                .map(serviceMapper::toDTO)
                .collect(Collectors.toList());
    }

    public Optional<ServiceResponse> getServiceById(Long idService) {
        return serviceRepository.findByIdService(idService)
                .map(serviceMapper::toDTO);
    }
}
