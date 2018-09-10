package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Abonnes;

@Repository
public interface AbonnesRepository extends JpaRepository<Abonnes, Long> {
	
	@Modifying
	@Query(value = "update abonnes a set a.etat = ? where u.id_abonne = ?", 
	  nativeQuery = true)
	int deleteAbonne(Long id_abonne);

}
