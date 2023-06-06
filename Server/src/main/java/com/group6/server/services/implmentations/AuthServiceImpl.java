package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.entites.User;
import com.group6.server.services.AuthService;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Override
    public User findByUsernameOrEmail(String identifier) {
        //Todo: implement this method to return a user from the database based on the identifier (username or email).
        return null;
    }

    @Override
    public User register(SignInGoogleDTO registerDTO) {
        return null;
    }
}
