package com.group6.server.services;

import com.group6.server.models.entites.Transaction;
import com.group6.server.models.entites.User;

import java.util.List;

public interface TransactionService {
    // This will get all the transactions for the one who received the ticket
    List<Transaction> findByUserDestination(User user);

    // This one will get all the tickets transactions which he started
    List<Transaction> findByUserInitiator(User user);

    Transaction create(Transaction transaction, User destiny, User emitter);
}
