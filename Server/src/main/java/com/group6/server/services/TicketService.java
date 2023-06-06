package com.group6.server.services;

import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;

import java.util.List;

public interface TicketService {
   void create(Ticket ticket, Tier tier);

   Ticket getById(String id);

   List<Ticket> getAllByTier(Tier tier);

   // This method may be redundant
   List<Ticket> getAllByPurchase(Purchase purchase);

   void updateTicketValidity(Ticket ticket);
}
