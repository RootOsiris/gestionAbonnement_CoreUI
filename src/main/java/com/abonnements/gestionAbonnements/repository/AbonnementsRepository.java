package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Abonnements;

@Repository
public interface AbonnementsRepository extends JpaRepository<Abonnements, Long> {

}
