package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.admin.ToggleUserAccessDTO;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.API_ADMIN_URL + "/mod")
public class ModeratorController {

    @Autowired
    private ErrorHandler errorHandler;

    @PatchMapping("/toggle-ban")
    public ResponseEntity<?> toggleBanUser(@Valid @RequestBody ToggleUserAccessDTO dto, BindingResult validations){
        if(validations.hasErrors()){
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

        return ResponseEntity.ok().build();
    }
}
