package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.DayOffRequestDto;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.service.ScheduleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    @Autowired
    ScheduleService scheduleService;

    @GetMapping("/week")
    public ResponseEntity<?> getWorkingScheduleByWeek(@AuthenticationPrincipal User user){
        return ResponseEntity.ok(ApiResponse.success(scheduleService.getScheduleByWeek(user)));
    }

    @GetMapping("")
    public ResponseEntity<?> getWorkingScheduleById(@RequestParam Long id){
        return ResponseEntity.ok(ApiResponse.success(scheduleService.getScheduleById(id)));
    }

    @PostMapping("/day-off")
    public ResponseEntity<?> requestDayoff(@AuthenticationPrincipal User user, @RequestBody @Valid DayOffRequestDto request){
        return ResponseEntity.ok(ApiResponse.success(scheduleService.requestDayoff(user, request)));
    }

    @GetMapping("/day-off")
    public ResponseEntity<?> getDayoffByUser(@AuthenticationPrincipal User user){
        return ResponseEntity.ok(ApiResponse.success(scheduleService.getNumbDayOff(user)));
    }

}
