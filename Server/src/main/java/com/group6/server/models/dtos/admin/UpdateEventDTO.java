package com.group6.server.models.dtos.admin;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateEventDTO {
    // TODO: You must create the fields required for this dto
    @NotEmpty(message = "The event must have a title")
    private String title;

    @NotEmpty(message = "The organizer is required")
    private String organizer;

    @NotEmpty(message = "The event location is required")
    private String location;

    @NotEmpty(message = "The date and time must be sent")
    private LocalDateTime date;

    @NotEmpty(message = "The event categories must be sent")
    private List<String> categories;
}
