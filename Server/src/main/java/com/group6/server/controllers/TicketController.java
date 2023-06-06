package com.group6.server.controllers;

import com.group6.server.utils.Constants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/ticket")
public class TicketController {
    @GetMapping("/qr/{id}")
    public ResponseEntity<?> getQRCode(@PathVariable(name = "id") String id){
        return ResponseEntity.ok().build();
    }
}
