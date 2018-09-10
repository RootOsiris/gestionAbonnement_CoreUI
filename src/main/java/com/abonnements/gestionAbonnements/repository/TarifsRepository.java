package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Tarifs;

@Repository
public interface TarifsRepository extends JpaRepository<Tarifs, Long>{

}
