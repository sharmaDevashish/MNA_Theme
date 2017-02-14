package com.nmbr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nmbr.model.User;
import com.nmbr.service.AuthService;

@RestController
@RequestMapping(value="/joshikatech/api")
public class AuthController {
	
	@Autowired 
	private AuthService authService;
	
	@RequestMapping(value="/v1/user", method=RequestMethod.POST , consumes ="application/json")
	public void  authenticateUser (@RequestBody  User user) {
		
		 System.out.println("Inside Controoelr" + user.getEmail());
		 System.out.println("Inside Controoelr"  + user.getPassword());
	
		 user.setEmail(user.getEmail());
		 user.setPassword(user.getPassword());
		 
		 authService.addUser(user);
		 
	}
}

