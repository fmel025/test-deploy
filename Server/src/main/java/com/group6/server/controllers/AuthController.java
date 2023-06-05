package com.group6.server.controllers;

import com.group6.server.models.dtos.SignInDTO;
import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.group6.server.utils.Constants;

import com.group6.server.models.dtos.MessageDTO;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/auth")
public class AuthController {

	@Autowired
	private AuthService userService;

	@PostMapping("/login")
	public ResponseEntity<?> getLogin(@Valid @RequestBody SignInDTO data, BindingResult validations){

		if(validations.hasErrors()){
			return ResponseEntity.badRequest().body("Bad req");
		}
		return new ResponseEntity<Object>( new MessageDTO("Controller working successfully"), 
				HttpStatus.OK);
	}

	@PostMapping("/google")
	public ResponseEntity<?> getGoogleLogin(@Valid @RequestBody SignInGoogleDTO data, BindingResult validations) {

		if(validations.hasErrors()){
			return ResponseEntity.badRequest().body("Bad req");
		}

		return new ResponseEntity<Object>( new MessageDTO("Controller working successfully"),
				HttpStatus.OK);
	}
}
