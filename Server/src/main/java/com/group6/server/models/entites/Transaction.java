package com.group6.server.models.entites;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class Transaction {
    private String id;
    private Date date;
    private String userTempCode;
    private String confirmationCode;
}
