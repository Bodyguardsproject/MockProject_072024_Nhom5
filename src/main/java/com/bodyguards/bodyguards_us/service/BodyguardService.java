package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.BodyguardResponse;
import java.util.List;
import java.util.Optional;

public interface BodyguardService {

	List<BodyguardResponse> getAllBodyguards();

	Optional<BodyguardResponse> getBodyguardById(Long id);
}
