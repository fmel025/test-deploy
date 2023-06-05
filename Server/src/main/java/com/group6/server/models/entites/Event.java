package com.group6.server.models.entites;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
public class Event {

    private UUID id;

    private String title;

    private String organizer;

    private LocalDateTime date;

    private String location;

    private String url_image;
}
