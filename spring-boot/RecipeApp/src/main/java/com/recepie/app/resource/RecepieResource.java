package com.recepie.app.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recepie.app.entity.Recipie;
import com.recepie.app.repository.RecepieRepository;

@CrossOrigin(maxAge = 3600)
@RestController()
@RequestMapping(value="/user")
public class RecepieResource {

	@Autowired
	RecepieRepository recepieRepository;
	
	
	@PostMapping(value="/add")
	public ResponseEntity<Void> saveRecipie(@RequestBody Recipie recipie ){
		recepieRepository.save(recipie);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	
	@GetMapping(value="/all")
	public ResponseEntity<List<Recipie>> getAllRecipie(){
				
		List<Recipie> recepieList = (List<Recipie>) recepieRepository.findAll();
		
		if(recepieList.isEmpty()){
			return new ResponseEntity<List<Recipie>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
		}
		
		return new ResponseEntity<List<Recipie>>(recepieList,HttpStatus.OK);
		
	
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Recipie> getOneRecipie(@PathVariable("id") Integer id){
		
		
		Recipie recipie = recepieRepository.findOne(id);
		
		if (recipie == null) {
			System.out.println("recipie with id " + id + " not found");
			return new ResponseEntity<Recipie>(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Recipie>(recipie,HttpStatus.OK);
		
	}
	
	
	
	
	
}
