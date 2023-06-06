package com.group6.server.controllers;


import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/event")
public class EventController {

    @Autowired
    ErrorHandler errorHandler;

    // This will have pagination on the future
    @GetMapping("/all")
    public ResponseEntity<?> getAllEvents(){
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/{code}")
    public ResponseEntity<?> findEventById(@PathVariable(name = "code") String code){
        return ResponseEntity.ok().build();
    }
}
