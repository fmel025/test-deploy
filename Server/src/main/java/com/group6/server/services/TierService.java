package com.group6.server.services;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Tier;

public interface TierService {
    void save(Tier tier, Event event);
}
