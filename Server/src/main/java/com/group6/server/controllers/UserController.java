package com.group6.server.controllers;

import com.group6.server.utils.Constants;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/user")
public class UserController {

    @PatchMapping("/change-password")
    public ResponseEntity<?> changePassword(){
        return ResponseEntity.ok().build();
    }

    // This route may be needed in the future
    @PatchMapping("/change-username")
    public ResponseEntity<?> changeUsername(){
        return ResponseEntity.ok().build();
    }

    // This route is to get a user code to transfer a ticket
    @GetMapping("/code/{id}")
    public ResponseEntity<?> getUserCode(@PathVariable(name = "id") String id){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserData(@PathVariable(name = "id") String id){
        return ResponseEntity.ok().build();
    }
}
