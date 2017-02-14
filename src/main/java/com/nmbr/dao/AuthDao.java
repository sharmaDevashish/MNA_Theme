package com.nmbr.dao;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nmbr.model.User;



@Repository
@Transactional
public class AuthDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
     public void addUser(User user) {
		 
     System.out.println("Inside dao");
		 
	 Integer rowNo = (Integer) sessionFactory.getCurrentSession().save(user);
	 user.setEmployeeId(rowNo);
		  
	 }
	
 
 
 

}
