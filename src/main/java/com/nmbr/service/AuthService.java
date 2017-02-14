package com.nmbr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nmbr.dao.AuthDao;
import com.nmbr.model.User;

@Service
public class AuthService {
	
	@Autowired
	private AuthDao authDao;

	public void  addUser(User user) {	
		System.out.println("Inside servcie");
		authDao.addUser(user);      
	}
	
	

}