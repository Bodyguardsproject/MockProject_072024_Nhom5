package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.DayOffRequestDto;
import com.bodyguards.bodyguards_us.entity.DayOffRequest;
import com.bodyguards.bodyguards_us.entity.Schedule;
import com.bodyguards.bodyguards_us.entity.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ScheduleService {

    public List<Schedule> getScheduleByWeek(User user);

    public Schedule getScheduleById(Long id);

    public DayOffRequest requestDayoff(User user, DayOffRequestDto request);

    public Long getNumbDayOff(User user);


}

