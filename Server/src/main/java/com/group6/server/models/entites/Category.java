package com.group6.server.models.entites;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Category {

    String id;
    
    String name;

    public Category(String name) {
        this.name = name;
    }
}
