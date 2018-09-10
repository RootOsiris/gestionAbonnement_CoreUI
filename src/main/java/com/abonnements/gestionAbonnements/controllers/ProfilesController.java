package com.abonnements.gestionAbonnements.controllers;

import com.abonnements.gestionAbonnements.exceptions.ResourceNotFoundException;
import com.abonnements.gestionAbonnements.model.Profiles;
import com.abonnements.gestionAbonnements.repository.AbonnementsRepository;
import com.abonnements.gestionAbonnements.repository.ProfilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProfilesController {
	@Autowired
	ProfilesRepository profilesRepository;

	@GetMapping("/profiles")
	public List<Profiles> getAllProfiles() {
	    return profilesRepository.findAll();
	}


	@PostMapping("/profiles")
	public Profiles createProfile(@Valid @RequestBody Profiles profile) {
	    return profilesRepository.save(profile);
	}


	@GetMapping("/profiles/{id}")
	public Profiles getProfileById(@PathVariable(value = "id") Long id_Profile) {
	    return profilesRepository.findById(id_Profile)
	            .orElseThrow(() -> new ResourceNotFoundException("Profiles", "id", id_Profile));
	}


	@PutMapping("/profiles/")
	public Profiles updateProfile(@Valid @RequestBody Profiles profile) {

	    return profilesRepository.save(profile);
	}


	@DeleteMapping("/profiles/")
	public Profiles deleteProfile(@Valid @RequestBody Profiles profile) {
	    return profilesRepository.save(profile);
	}

	
}
