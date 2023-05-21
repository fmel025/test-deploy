package com.group6.server.models.entites;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class CodeQR {
    //foreign key : private String ticketId;
    private String id;
    private Date creationDate;
    private Date expirationDate;
    private Date validationDate;
}
