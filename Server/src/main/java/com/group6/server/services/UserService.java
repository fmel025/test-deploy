package com.group6.server.services;

import com.group6.server.models.entites.User;

public interface UserService {
    //Register method
    User register(RegisterDTO registerDTO);

    //compare password method
    boolean comparePassword(String password, String hashedPassword);
}
