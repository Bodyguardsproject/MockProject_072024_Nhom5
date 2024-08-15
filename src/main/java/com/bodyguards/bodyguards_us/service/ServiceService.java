package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.ServiceRequest;
import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import java.util.List;
import java.util.Optional;

public interface ServiceService {

    List<ServiceResponse> getAllServices();

    Optional<ServiceResponse> getServiceById(Long idService);

    ServiceResponse createService(ServiceRequest serviceRequest);

    Optional<ServiceResponse> replaceService(Long id, ServiceRequest serviceRequest);

    Optional<ServiceResponse> partialUpdateService(Long id, ServiceRequest serviceRequest);

    void deleteService(Long id);

	List<ServiceResponse> getAllServices();

	Optional<ServiceResponse> getServiceById(Long idService);

}
