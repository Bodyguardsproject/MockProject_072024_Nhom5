/*
 *  CreateAccountRequest
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:33 AM
 * */


package com.bodyguards.bodyguards_us.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class CreateAccountRequest {

    @NotBlank
    @NotNull
    @Size(min = 5, max = 50)
    private String firstName;

    @NotBlank
    @NotNull
    @Size(min = 5, max = 50)
    private String lastName;

    @NotBlank
    @NotNull
    @Size(min = 5, max = 100)
    @Pattern(
            regexp = "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$",
            message =
                    "Invalid US phone format")
    private String phone;


    @NotBlank
    @NotNull
    @Email(message = "Invalid email address")
    private String email;

    // optional
    private String address;


    @Pattern(
            regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
            message =
                    "Password must be at least 8 character, one numeric character, one special character, without space and including lowercase, uppercase character")
    private String password;
}
