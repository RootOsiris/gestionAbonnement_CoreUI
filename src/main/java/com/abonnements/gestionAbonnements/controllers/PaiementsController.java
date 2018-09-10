package com.abonnements.gestionAbonnements.controllers;

import com.abonnements.gestionAbonnements.exceptions.ResourceNotFoundException;
import com.abonnements.gestionAbonnements.model.Paiements;
import com.abonnements.gestionAbonnements.repository.AbonnementsRepository;
import com.abonnements.gestionAbonnements.repository.PaiementsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PaiementsController {
	@Autowired
	PaiementsRepository paiementsRepository;

    // Get All 

    // Create a new 

    // Get a Single 

    // Update a 

    // Delete a 
	
}
