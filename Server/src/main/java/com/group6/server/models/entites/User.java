package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class User {
    private UUID code;
    private String username;
    private String email;
    @JsonIgnore
    private String password;
    //foreign key : private String authorizationCode;
}
