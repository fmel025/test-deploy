package com.group6.server.controllers;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.UserConfirmationCodeDTO;
import com.group6.server.models.dtos.UserTempCodeDTO;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/transaction")
public class TransactionController {

    @Autowired
    ErrorHandler errorHandler;

    @GetMapping("/destination/{id}")
    public ResponseEntity<?> getTransactionsByUserDestination(@PathVariable(name = "id") String id) {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/initiator/{id}")
    public ResponseEntity<?> getTransactionsByUserInitiator(@PathVariable(name = "id") String id) {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/")
    public ResponseEntity<?> createTransaction(@Valid @RequestBody UserTempCodeDTO dto, BindingResult validations) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }

        return ResponseEntity.ok().build();
    }

    @PatchMapping("/confirm/{id}")
    public ResponseEntity<?> confirmTransaction(@Valid @RequestBody UserConfirmationCodeDTO dto, BindingResult validations){
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }

        return ResponseEntity.ok().build();
    }
}
