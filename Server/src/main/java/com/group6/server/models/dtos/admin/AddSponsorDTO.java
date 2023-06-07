package com.group6.server.models.dtos.admin;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddSponsorDTO {

    @NotEmpty(message = "The event is required")
    private String eventId;

    @NotEmpty(message = "The sponsor name must be sent")
    private String sponsor;
}
