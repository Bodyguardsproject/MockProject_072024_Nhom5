package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.DayOffRequestResponse;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.service.DayOffRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supervisor/dayoffrequests")
@RequiredArgsConstructor
public class DayOffRequestController {

    private final DayOffRequestService dayOffRequestService;

    @GetMapping("/bodyguards")
    public ResponseEntity<ApiResponse<List<DayOffRequestResponse>>> getDayOffRequestsWithBodyguards() {
        List<DayOffRequestResponse> dayOffRequests = dayOffRequestService.getDayOffRequestsWithBodyguards();
        if (dayOffRequests.isEmpty()) {
            throw new ApiException(ErrorCode.RESOURCE_NOT_FOUND);
        }
        return ResponseEntity.ok(ApiResponse.success(dayOffRequests));
    }

    @PatchMapping("/{idDayOff}/accept")
    public ResponseEntity<ApiResponse<String>> acceptDayOffRequest(@PathVariable Long idDayOff) {
        try {
            dayOffRequestService.acceptDayOffRequest(idDayOff);
            return ResponseEntity.ok(ApiResponse.success("Day off request accepted."));
        } catch (Exception e) {
            throw new ApiException(ErrorCode.APPLICANT_NOT_FOUND);
        }
    }

    @PatchMapping("/{idDayOff}/deny")
    public ResponseEntity<ApiResponse<String>> denyDayOffRequest(@PathVariable Long idDayOff) {
        try {
            dayOffRequestService.denyDayOffRequest(idDayOff);
            return ResponseEntity.ok(ApiResponse.success("Day off request denied."));
        } catch (Exception e) {
            throw new ApiException(ErrorCode.APPLICANT_NOT_FOUND);
        }
    }
}
