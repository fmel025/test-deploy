package com.group6.server.services;

import com.group6.server.models.entites.Event;

public interface EventService {
    //create event
    Event createEvent(EventDTO eventDTO);

    //update event
    Event updateEvent(EventDTO eventDTO); // should be the same method as createEvent
}
