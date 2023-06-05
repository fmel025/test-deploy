package com.group6.server.models.entites;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Tier {
    // Event relationship

    private UUID id;

    private String name;

    // Should this contain price?
}
