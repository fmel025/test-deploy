package com.group6.server.services;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Sponsor;

public interface SponsorService {
    void save(Sponsor sponsor, Event event);
}
