package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.ServiceRequest;
import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import com.bodyguards.bodyguards_us.entity.Services;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.ServiceMapper;
import com.bodyguards.bodyguards_us.repository.ServiceRepository;
import com.bodyguards.bodyguards_us.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceServiceImpl implements ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceMapper serviceMapper;

    @Override
    public List<ServiceResponse> getAllServices() {
        List<Services> services = serviceRepository.findAll();
        return services.stream()
                .map(serviceMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<ServiceResponse> getServiceById(Long idService) {
        return serviceRepository.findByIdService(idService)
                .map(serviceMapper::toDTO);
    }

    @Override
    public ServiceResponse createService(ServiceRequest serviceRequest) {
        Services service = serviceMapper.toEntity(serviceRequest);
        Services savedService = serviceRepository.save(service);
        return serviceMapper.toDTO(savedService);
    }

    @Override
    public Optional<ServiceResponse> replaceService(Long id, ServiceRequest serviceRequest) {
        return serviceRepository.findByIdService(id)
                .map(service -> {
                    service.setName(serviceRequest.getName());
                    service.setImage(serviceRequest.getImage());
                    service.setDescription(serviceRequest.getDescription());
                    serviceRepository.save(service);
                    return serviceMapper.toDTO(service);
                });
    }

    @Override
    public Optional<ServiceResponse> partialUpdateService(Long id, ServiceRequest serviceRequest) {
        return serviceRepository.findByIdService(id)
                .map(service -> {
                    if (serviceRequest.getName() != null) {
                        service.setName(serviceRequest.getName());
                    }
                    if (serviceRequest.getImage() != null) {
                        service.setImage(serviceRequest.getImage());
                    }
                    if (serviceRequest.getDescription() != null) {
                        service.setDescription(serviceRequest.getDescription());
                    }
                    serviceRepository.save(service);
                    return serviceMapper.toDTO(service);
                });
    }

    @Override
    public void deleteService(Long id) {
        if (serviceRepository.existsById(id)) {
            serviceRepository.deleteById(id);
        } else {
            throw new ApiException(ErrorCode.RESOURCE_NOT_FOUND);
        }
    }
}

