package com.group6.server.services;

import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.dtos.SignInDTO;
import com.group6.server.models.entites.User;

import java.util.List;

public interface UserService {
    //Register method
    User register(SignInGoogleDTO registerDTO);

    //compare password method
    boolean comparePassword(String password, String hashedPassword);

    //find by one id method
    User findById(String id);  //the id is the code of the user

    //find by one username o email method
    User findByUsernameOrEmail(String identifier); // identifier is username or email

    //update password method
    User changePassword(String password, User user);

    //get all users
    List<User> getAllUsers();

    //change username method
    User changeUsername(String username, User user);
}
