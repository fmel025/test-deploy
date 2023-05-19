package com.group6.server.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class SigninGoogleDTO {
    @NotEmpty(message = " email is required")
    @Email(message = "Email is invalid")
    private String email ; //  email
}
