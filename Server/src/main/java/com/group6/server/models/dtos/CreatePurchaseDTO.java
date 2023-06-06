package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePurchaseDTO {

    @NotEmpty(message = "The event id is required")
    private String eventId;

    // Here maybe will be replaced by the token
    @NotEmpty(message = "The user id is required")
    private String userId;

    @NotEmpty(message = "The tier id is required")
    private String tierId;

    @NotEmpty(message = "The total amount of tickets is required")
    private Integer amount;

}
