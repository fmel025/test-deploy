package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// This could be used in the create purchase DTO if the purchase can contain multiple
// tickets from multiple tiers

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TierOption {
    @NotEmpty(message = "The tier id is required")
    private String tierId;

    @NotEmpty(message = "The total amount of tickets is required")
    private Integer amount;
}
