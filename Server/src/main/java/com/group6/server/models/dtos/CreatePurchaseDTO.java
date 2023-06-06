package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePurchaseDTO {

    @NotEmpty(message = "The event id is required")
    private String eventId;

    // Here maybe will be replaced by the token
    @NotEmpty(message = "The user id is required")
    private String userId;


    // Maybe this two will be extracted in some array (for multiple tiers)
    @NotEmpty(message = "The tier id is required")
    private String tierId;

    @NotEmpty(message = "The total amount of tickets is required")
    private Integer amount;

    // @NotEmpty(message = "The options must have a least one item")
    // private List<TierOption> options;
}
