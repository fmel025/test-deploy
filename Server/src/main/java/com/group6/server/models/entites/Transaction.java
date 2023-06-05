package com.group6.server.models.entites;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class Transaction {
    //foreign key : private String ticketId;
    //foreign key : private String originalUserId;
    //foreign key : private String newUserId;
    private UUID id;
    private Date date;
    private String userTempCode;
    private String confirmationCode;
}
