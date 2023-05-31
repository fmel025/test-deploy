package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {

    private String username;
    private String email;
    @JsonIgnore
    private String password;
    //foreign key : private String authorizationCode;
}
