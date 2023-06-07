package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.ToggleUserAuthDTO;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_ADMIN_URL + "/admin")
public class AdminController {

    @Autowired
    ErrorHandler errorHandler;

    @PatchMapping("/toggle-authorization")
    public ResponseEntity<?> addOrRemoveAuthorization(
            @Valid @RequestBody ToggleUserAuthDTO dto,
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

    // This route will set the app for the normal users as blocked
    @PatchMapping("/toggle-access")
    public ResponseEntity<?> toggleBlockAccess(){
        return ResponseEntity.ok().build();
    }
}
