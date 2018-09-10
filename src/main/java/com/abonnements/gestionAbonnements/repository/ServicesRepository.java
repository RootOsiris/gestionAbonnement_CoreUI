package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Services;

@Repository
public interface ServicesRepository extends JpaRepository<Services, Long>{

}
