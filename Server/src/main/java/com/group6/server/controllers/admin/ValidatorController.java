package com.group6.server.controllers.admin;

import com.group6.server.utils.Constants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_ADMIN_URL + "/validator")
public class ValidatorController {
    // This route will validate a ticket
    @PostMapping("/validate/{id}")
    public ResponseEntity<?> validateTicket(
            @PathVariable(name = "id") String ticketId
    ){
        return ResponseEntity.ok().build();
    }

    // This route will return all the events where the validator acts as validator
    @GetMapping("/")
    public ResponseEntity<?> getAllValidatorEvents(){
        return ResponseEntity.ok().build();
    }
}
