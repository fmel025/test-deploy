package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToggleUserAuthDTO {
    @NotEmpty(message = "The user id is required")
    private String userId;

    @NotEmpty(message = "You must sent either the auth id or the name of the role")
    private String authorization;
}
