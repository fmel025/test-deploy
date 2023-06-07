package com.group6.server.models.dtos.admin;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateTierDTO {
    @NotEmpty(message = "The event id must be sentd")
    private String eventId;

    @NotEmpty(message = "The tier name is required")
    private String name;

    @NotEmpty(message = "The price of this tier is required")
    private BigDecimal price;
}
