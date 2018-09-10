package com.abonnements.gestionAbonnements.controllers;

import com.abonnements.gestionAbonnements.exceptions.ResourceNotFoundException;
import com.abonnements.gestionAbonnements.model.Structures;
import com.abonnements.gestionAbonnements.model.Users;
import com.abonnements.gestionAbonnements.repository.AbonnementsRepository;
import com.abonnements.gestionAbonnements.repository.StructuresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/structures")
public class StructuresController {
	@Autowired
	StructuresRepository structuresRepository;

	@GetMapping
	public List<Structures> getAllStructures() {
	    return structuresRepository.findAll();
	}


	@PostMapping
	public Structures createStructure(@Valid @RequestBody Structures structure) {
	    return structuresRepository.save(structure);
	}


	@GetMapping("/{id}")
	public Structures getStructureById(@PathVariable(value = "id") Long id_Structure) {
	    return structuresRepository.findById(id_Structure)
	            .orElseThrow(() -> new ResourceNotFoundException("Structures", "id", id_Structure));
	}


	@PutMapping
	public Structures updateStructure(@Valid @RequestBody Structures structure) {

	    return structuresRepository.save(structure);
	}


	@DeleteMapping("/{id}")
	public Structures deleteStructure(@PathVariable(value = "id") Long id_Structure) {
		Structures structure=structuresRepository.getOne(id_Structure);
		structure.setEtat(false);
	    return structuresRepository.save(structure);
	}
	
}
