package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.DayOffRequestResponse;
import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.DayOffRequest;
import com.bodyguards.bodyguards_us.enums.DayOffStatus;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.DayOffRequestMapper;
import com.bodyguards.bodyguards_us.repository.DayOffRequestRepository;
import com.bodyguards.bodyguards_us.service.DayOffRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DayOffRequestServiceImpl implements DayOffRequestService {

    private final DayOffRequestRepository dayOffRequestRepository;
    private final DayOffRequestMapper dayOffRequestMapper;

    @Override
    public List<DayOffRequestResponse> getDayOffRequestsWithBodyguards() {
        List<DayOffRequest> dayOffRequests = dayOffRequestRepository.findAll();
        return dayOffRequests.stream()
                .map(dayOffRequestMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void acceptDayOffRequest(Long idDayOff) {
        DayOffRequest dayOffRequest = dayOffRequestRepository.findById(idDayOff)
                .orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
        dayOffRequest.setStatus(DayOffStatus.ACCEPTED);
        dayOffRequestRepository.save(dayOffRequest);
    }

    @Override
    public void denyDayOffRequest(Long idDayOff) {
        DayOffRequest dayOffRequest = dayOffRequestRepository.findById(idDayOff)
                .orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));
        dayOffRequest.setStatus(DayOffStatus.DENIED);
        dayOffRequestRepository.save(dayOffRequest);
    }
}
