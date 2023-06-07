package com.group6.server.models.dtos.admin;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToggleUserAccessDTO {

    @NotEmpty(message = "The user id is required to ban/unban an user")
    private String userId;
}
