package com.abonnements.gestionAbonnements.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Tarifs")
@EntityListeners(AuditingEntityListener.class)

public class Tarifs implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Tarif;

    @NotBlank
    private Long prix;

    @NotBlank
    private String formule;

	public Long getId_Tarif() {
		return id_Tarif;
	}

	public void setId_Tarif(Long id_Tarif) {
		this.id_Tarif = id_Tarif;
	}

	public Long getPrix() {
		return prix;
	}

	public void setPrix(Long prix) {
		this.prix = prix;
	}

	public String getFormule() {
		return formule;
	}

	public void setFormule(String formule) {
		this.formule = formule;
	}

	public Tarifs(@NotBlank Long prix, @NotBlank String formule) {
		this.prix = prix;
		this.formule = formule;
	}

	public Tarifs() {
	}

	@Override
	public String toString() {
		return "Tarifs [id_Tarif=" + id_Tarif + ", prix=" + prix + ", formule=" + formule + "]";
	}
    
    
}