package com.group6.server.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.server.models.dtos.MessageDTO;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@GetMapping("/login")
	public ResponseEntity<?> getLogin(){
		return new ResponseEntity<Object>( new MessageDTO("Controller working successfully"), 
				HttpStatus.OK);
	}
	
}
