package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Paiements;

@Repository
public interface PaiementsRepository extends JpaRepository<Paiements, Long> {

}
