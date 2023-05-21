package com.group6.server.models.entites;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class Ticket {
    //foreign key: private String userId;
    //foreign key: private String tierId;
    //foreign key: private String purchaseId;
    private String id;
    private String temporaryCode;
    private String state;
    private String price;
    private Date date;

}
