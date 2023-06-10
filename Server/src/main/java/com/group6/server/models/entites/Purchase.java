package com.group6.server.models.entites;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class Purchase {
    //foreign key  : private String userId;
    private UUID id;
    private String total;
    private Date date;


}
