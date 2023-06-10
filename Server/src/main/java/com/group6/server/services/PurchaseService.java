package com.group6.server.services;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.User;

import java.util.List;

// Base purchase services
public interface PurchaseService {
    Purchase save(Purchase purchase);

    List<Purchase> findByUser(User user);

    Purchase findOneById(String id);

    // This will be optional if needed in the future
    List<Purchase> findOneByEvent(Event event);
}
