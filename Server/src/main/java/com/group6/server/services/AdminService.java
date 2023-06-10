package com.group6.server.services;

import com.group6.server.models.entites.Authorization;
import com.group6.server.models.entites.User;

public interface AdminService {
    User toggleUserAuthorization(User user, Authorization authorization);
}
