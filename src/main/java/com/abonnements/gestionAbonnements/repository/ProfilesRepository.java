package com.abonnements.gestionAbonnements.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abonnements.gestionAbonnements.model.Profiles;

@Repository
public interface ProfilesRepository extends JpaRepository<Profiles, Long>{

}
