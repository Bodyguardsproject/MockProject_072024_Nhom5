package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.DayOffRequestDto;
import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.DayOffRequest;
import com.bodyguards.bodyguards_us.entity.Schedule;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.repository.BodyguardRepository;
import com.bodyguards.bodyguards_us.repository.DayOffRepository;
import com.bodyguards.bodyguards_us.repository.ScheduleRepository;
import com.bodyguards.bodyguards_us.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleRepository scheduleRepository;

    @Autowired
    BodyguardRepository bodyguardRepository;

    @Autowired
    DayOffRepository dayOffRepository;

    @Override
    public List<Schedule> getScheduleByWeek(User user) {
        LocalDate today = LocalDate.now();
        LocalDate startOfWeek = today.with(DayOfWeek.MONDAY);
        LocalDate endOfWeek = today.with(DayOfWeek.SUNDAY);
        Long id_bodyguard = bodyguardRepository.findByUser(user).getIdBodyguard();
        return scheduleRepository.getScheduleByWeekAndUser(startOfWeek, endOfWeek, id_bodyguard);
    }

    @Override
    public Schedule getScheduleById(Long id) {
        return scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("This schedule doesn't exsit"));
    }

    @Override
    public DayOffRequest requestDayoff(User user, DayOffRequestDto request) {
        DayOffRequest dayOffRequest = new DayOffRequest();
        Bodyguard bodyguard = bodyguardRepository.findByUser(user);
        dayOffRequest.setBodyguard(bodyguard);
        dayOffRequest.setReason(request.getReason());

        dayOffRequest = dayOffRepository.save(dayOffRequest);

        for (Long idS : request.getIdSchedules()) {
            Schedule schedule = scheduleRepository.findByBodyguardAndIdSchedule(bodyguard, idS);
            if (schedule == null)
                throw new RuntimeException("This Schedule doesn't exsit");
            schedule.setDayOffRequest(dayOffRequest);
            scheduleRepository.save(schedule);
        }
        return dayOffRequest;
    }

    @Override
    public Long getNumbDayOff(User user) {
        Bodyguard bodyguard = bodyguardRepository.findByUser(user);
        return dayOffRepository.countDayOff(bodyguard.getIdBodyguard());
    }
}
