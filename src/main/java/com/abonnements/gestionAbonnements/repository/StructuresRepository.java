package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Structures;

@Repository
public interface StructuresRepository extends JpaRepository<Structures, Long>{

	@Modifying
	@Query(value = "update structures s set s.etat = ? where s.id_structure = ?", 
	  nativeQuery = true)
	int deleteUser(Long id_structure);
}