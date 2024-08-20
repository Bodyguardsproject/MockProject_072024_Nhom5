package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.DayOffRequestResponse;
import com.bodyguards.bodyguards_us.repository.DayOffRequestRepository;

import java.util.List;

public interface DayOffRequestService {

    List<DayOffRequestResponse> getDayOffRequestsWithBodyguards();

    void acceptDayOffRequest(Long idDayOff);
    void denyDayOffRequest(Long idDayOff);
}
