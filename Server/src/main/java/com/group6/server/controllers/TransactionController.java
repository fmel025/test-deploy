package com.group6.server.controllers;

import com.group6.server.utils.Constants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/transaction")
public class TransactionController {

    @GetMapping("/destination/{id}")
    public ResponseEntity<?> getTransactionsByUserDestination(@PathVariable(name = "id") String id){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/initiator/{id}")
    public ResponseEntity<?> getTransactionsByUserInitiator(@PathVariable(name = "id") String id){
        return ResponseEntity.ok().build();
    }


}
