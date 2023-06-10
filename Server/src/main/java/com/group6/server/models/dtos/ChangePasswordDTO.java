package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangePasswordDTO {

    @NotEmpty(message = "The current password must be sent")
    private String currentPassword;

    @NotEmpty(message = "The new password is required")
    private String newPassword;
}
