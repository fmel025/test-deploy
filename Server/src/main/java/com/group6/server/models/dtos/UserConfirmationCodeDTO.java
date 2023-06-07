package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserConfirmationCodeDTO {
    @NotEmpty(message = "The confirmation code must be sent")
    private String confirmationCode;
}
