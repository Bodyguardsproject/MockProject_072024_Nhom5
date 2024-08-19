/*
 *  ContractRequest
 *  @author: Minhhieuano
 *  @created 8/19/2024 2:26 PM
 * */

package com.bodyguards.bodyguards_us.dto;

import com.bodyguards.bodyguards_us.enums.ContractStatus;
import com.bodyguards.bodyguards_us.enums.PaymentStatus;
import jakarta.validation.constraints.*;
import java.util.List;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ContractRequest {

	@NotNull(message = "Contract file is required") MultipartFile contractFile;

	@NotBlank(message = "Contract name cannot be blank")
	private String name;

	@NotNull(message = "Order ID cannot be null") private Long orderId;

	@NotNull(message = "Service ID cannot be null") private Long serviceId;

	@NotBlank(message = "Customer name cannot be blank")
	private String customer;

	private Long supervisorId;

	@NotNull(message = "Contract status cannot be null") private ContractStatus status;

	@NotBlank(message = "Address cannot be blank")
	private String address;

	@NotNull(message = "Payment status cannot be null") private PaymentStatus payStatus;

	@NotEmpty(message = "Bodyguards list cannot be empty")
	@Size(min = 1, message = "At least one bodyguard must be provided")
	private List<Long> bodyguards;

	@NotNull private List<Long> equipments;

	@Min(value = 100, message = "The cost service must be greater than or equal to 100$")
	private Double costService;

	@Min(value = 10, message = "The cost equipment must be greater than or equal to 10$")
	private Double costEquipment;
}
