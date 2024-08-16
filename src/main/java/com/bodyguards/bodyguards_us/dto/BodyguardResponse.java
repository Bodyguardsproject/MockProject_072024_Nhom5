package com.bodyguards.bodyguards_us.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BodyguardResponse {
    private Long idBodyguard;
    private String firstName;
    private String lastName;
    private String address;
    private String dateOfBirth;
    private String gender;
    private String avatar;
    private String email;
    private String phone;
    private int experience;
    private String availabilityStatus;
    private Double rating;
    private Double hourlyRate;
}
