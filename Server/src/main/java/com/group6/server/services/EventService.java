package com.group6.server.services;

import com.group6.server.models.dtos.EventDTO;
import com.group6.server.models.entites.Event;

import java.util.List;

public interface EventService {
    //create event
    Event createEvent(EventDTO eventDTO);

    //update event
    Event updateEvent(EventDTO eventDTO); // should be the same method as createEvent

    //find all events
    List<Event> findAllEvents();

    //find event by id
    Event findEventById(String id);

    //find  event by title
    Event findEventByTitle(String title);

    //toggle visibility of event
    Event toggleVisibility(String id);
}
