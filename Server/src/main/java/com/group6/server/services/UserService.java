package com.group6.server.services;

import com.group6.server.models.entites.User;

public interface UserService {
    //Register method
    User register(RegisterDTO registerDTO);

    //compare password method
    boolean comparePassword(String password, String hashedPassword);

    //find by one id method
    User findById(String id);  //the id is the code of the user

    //find by one username o email method
    User findByUsernameOrEmail(String identifier); // identifier is username or email

    //update password method
    User updatePassword(updatePasswordDTO updatePasswordDTO);
}
