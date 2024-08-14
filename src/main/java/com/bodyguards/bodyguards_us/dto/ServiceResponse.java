package com.bodyguards.bodyguards_us.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;

@Data
public class ServiceResponse {
    private Long idService;
    private String name;
    private String image;
    private String description;
}
