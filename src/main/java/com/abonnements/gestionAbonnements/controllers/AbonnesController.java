package com.abonnements.gestionAbonnements.controllers;

import com.abonnements.gestionAbonnements.exceptions.ResourceNotFoundException;
import com.abonnements.gestionAbonnements.model.Abonnes;
import com.abonnements.gestionAbonnements.model.Users;
import com.abonnements.gestionAbonnements.repository.AbonnementsRepository;
import com.abonnements.gestionAbonnements.repository.AbonnesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/abonnes")
public class AbonnesController {
	@Autowired
    AbonnesRepository abonnesRepository;

	@GetMapping
	public List<Abonnes> getAllAbonnes() {
	    return abonnesRepository.findAll();
	}


	@PostMapping
	public Abonnes createAbonne(@Valid @RequestBody Abonnes abonne) {
	    return abonnesRepository.save(abonne);
	}


	@GetMapping("/{id}")
	public Abonnes getAbonneById(@PathVariable(value = "id") Long id_Abonne) {
	    return abonnesRepository.findById(id_Abonne)
	            .orElseThrow(() -> new ResourceNotFoundException("Abonnes", "id", id_Abonne));
	}


	@PutMapping
	public Abonnes updateAbonne(@Valid @RequestBody Abonnes abonne) {

	    return abonnesRepository.save(abonne);
	}


	@DeleteMapping("/{id}")
	public Abonnes deleteAbonne(@PathVariable(value = "id") Long id_Abonne) {
	   Abonnes abonne=abonnesRepository.getOne(id_Abonne);
		abonne.setEtat(false);
	    return abonnesRepository.save(abonne);
	}
	
}
