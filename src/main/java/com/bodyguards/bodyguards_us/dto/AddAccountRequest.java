/*
 *  AddAccountRequest
 *  @author: Minhhieuano
 *  @created 8/16/2024 11:25 AM
 * */

package com.bodyguards.bodyguards_us.dto;

import com.bodyguards.bodyguards_us.enums.Gender;
import com.bodyguards.bodyguards_us.enums.UserRole;
import jakarta.validation.constraints.*;
import java.util.Date;
import java.util.List;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

@Data
public class AddAccountRequest {
	@NotBlank
	@Size(min = 1, max = 50)
	private String firstName;

	@NotBlank
	@Size(min = 1, max = 50)
	private String lastName;

	@NotBlank
	@Email(message = "Invalid email address")
	private String email;

	private String address;

	@Pattern(
			regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
			message =
					"Password must be at least 8 character, one numeric character, one special character, without space and including lowercase, uppercase character")
	private String password;

	@NotNull private List<UserRole> roles;

	@NotNull private Gender gender;

	@NotNull @DateTimeFormat(pattern = "MMddyyyy")
	private Date dateOfBirth;

	@NotBlank
	@NotNull @Size(min = 5, max = 100)
	@Pattern(regexp = "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$", message = "Invalid US phone format")
	private String phone;
}
