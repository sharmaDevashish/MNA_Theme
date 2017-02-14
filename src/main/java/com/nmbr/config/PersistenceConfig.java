package com.nmbr.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.tomcat.dbcp.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EnableTransactionManagement
@PropertySource({"classpath:application.properties" })
@ComponentScan({ "com.nmbr" })
public class PersistenceConfig {
	
	@Autowired
	   private Environment env;
	 
	   @Bean
	   public LocalSessionFactoryBean sessionFactory() {
	      LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
	      sessionFactory.setDataSource(restDataSource());
	      sessionFactory.setPackagesToScan(new String[] { "com.nmbr" });
	      sessionFactory.setHibernateProperties(hibernateProperties());
	 
	      return sessionFactory;
	   }
	 
	   @Bean
	   public DataSource restDataSource() {
	      BasicDataSource dataSource = new BasicDataSource();
	      dataSource.setDriverClassName(env.getProperty("spring.datasource.driverClassName"));
	      dataSource.setUrl(env.getProperty("spring.datasource.url"));
	      dataSource.setUsername(env.getProperty("spring.datasource.username"));
	      dataSource.setPassword(env.getProperty("spring.datasource.password"));

	      return dataSource;
	   }
	 
	   @Bean
	   @Autowired
	   public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
	      HibernateTransactionManager txManager = new HibernateTransactionManager();
	      txManager.setSessionFactory(sessionFactory);
	 
	      return txManager;
	   }
	 
	   @Bean
	   public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
	      return new PersistenceExceptionTranslationPostProcessor();
	   }
	 
	   Properties hibernateProperties() {
	      return new Properties() {
	         {
	            setProperty("hibernate.hbm2ddl.auto", env.getProperty("spring.jpa.hibernate.ddl-auto"));
	            setProperty("hibernate.dialect", env.getProperty("spring.jpa.properties.hibernate.dialect"));
	            setProperty("hibernate.globally_quoted_identifiers", "true");

	         }
	      };
	   }
	   
	   

}