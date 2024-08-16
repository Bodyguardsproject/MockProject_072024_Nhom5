package com.bodyguards.bodyguards_us.dto;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TrainingRequest {

	@NotNull(message = "Supervisor is required") Long supervisorId;

	@NotNull(message = "BodyGuard is required") private List<Long> bodyguardIds;

	@NotNull(message = "Training's name is required") String nameTraining;

	@NotNull(message = "Training's description is required") String description;

	@NotNull(message = "Training's dateStart is required") @DateTimeFormat(pattern = "MMddyyyy")
	Date dateStart;

	@NotNull(message = "Training's dateEnd is required") @DateTimeFormat(pattern = "MMddyyyy")
	Date dateEnd;

	@NotNull(message = "Training's file is required") MultipartFile file;
}
