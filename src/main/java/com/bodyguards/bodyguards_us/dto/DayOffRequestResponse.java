package com.bodyguards.bodyguards_us.dto;

import com.bodyguards.bodyguards_us.enums.DayOffStatus;
import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DayOffRequestResponse {
    private Long idDayOff;
    private Long idBodyguard;
    private String bodyguardName;
    private Date dateStart;
    private Date dateEnd;
    private String reason;
    private DayOffStatus status;
}
