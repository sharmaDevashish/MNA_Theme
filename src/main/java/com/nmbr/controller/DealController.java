package com.nmbr.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/joshikatech/api")
public class DealController {
	
	
	@RequestMapping(value="/v1/deals", method=RequestMethod.GET)
	@ResponseBody
	public List<String> getDealDetails() {
		
		List<String> dealList = new ArrayList<>();
		dealList.add("Deal1");
		dealList.add("Deal2");
		dealList.add("Deal3");
		dealList.add("Deal4");
		dealList.add("Deal5");
		dealList.add("Deal6");
		dealList.add("Deal7");
		dealList.add("Deal8");
		dealList.add("Deal9");
		dealList.add("Deal10");
		
		return dealList;
		 
	}
}

