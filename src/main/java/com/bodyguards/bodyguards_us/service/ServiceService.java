package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.ServiceResponse;
import java.util.List;
import java.util.Optional;

public interface ServiceService {
	List<ServiceResponse> getAllServices();

	Optional<ServiceResponse> getServiceById(Long idService);
}
