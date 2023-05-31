package com.group6.server.models.entites;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Event {

    String id;

    String title;

    String organizer;

    LocalDateTime date;

    String location;

    String url_image;
}
