package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.EventDTO;
import com.group6.server.models.dtos.admin.AddSponsorDTO;
import com.group6.server.models.dtos.admin.CreateTierDTO;
import com.group6.server.models.dtos.admin.UpdateEventDTO;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(Constants.API_ADMIN_URL + "/event")
public class EventModController {

    @Autowired
    ErrorHandler errorHandler;

    @PostMapping("/")
    public ResponseEntity<?> createEvent(
            @Valid @RequestBody EventDTO dto,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }
        return ResponseEntity.ok().build();
    }

    // This route may not be needed
    @PostMapping("/sponsor")
    public ResponseEntity<?> addSponsorToEvent(
            @Valid @RequestBody AddSponsorDTO dto,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }
        return ResponseEntity.ok().build();
    }

    // This route may be needed to make it flexible
    // Here I doubt if I have to create the tier here or outside
    // By default I will make it here
    @PostMapping("/tier")
    public ResponseEntity<?> addTierToEvent(
            @Valid @RequestBody CreateTierDTO dto,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }
        return ResponseEntity.ok().build();
    }

    // To update the event data
    @PutMapping("/")
    public ResponseEntity<?> updateEventData(
            @Valid @RequestBody UpdateEventDTO dto,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/toggle-visibility/{id}")
    public ResponseEntity<?> toggleEventVisibility(
            @PathVariable(name = "id") String event
    ) {
        return ResponseEntity.ok().build();
    }
}
