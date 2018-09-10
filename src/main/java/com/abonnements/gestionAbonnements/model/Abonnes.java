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
@Table(name = "Abonnes")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt","deletedAt"}, 
allowGetters = true)
public class Abonnes implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Abonne;

    
    private String nom;

    
    private String prenom;
    
    
    private String code;
    
    private String adresse;
    
    private String email;

    
    private String telephone;
    
    private Long id_Stucture;
    
    private Boolean etat;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;
    
    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date deletedAt;

	public Long getId_Abonne() {
		return id_Abonne;
	}

	public void setId_Abonne(Long id_Abonne) {
		this.id_Abonne = id_Abonne;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public Long getId_Stucture() {
		return id_Stucture;
	}

	public void setId_Stucture(Long id_Stucture) {
		this.id_Stucture = id_Stucture;
	}

	public Boolean getEtat() {
		return etat;
	}

	public void setEtat(Boolean etat) {
		this.etat = etat;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public Abonnes(@NotBlank String nom, @NotBlank String prenom, @NotBlank String code, String adresse, String email,
			@NotBlank String telephone, Long id_Stucture, Boolean etat, Date createdAt, Date updatedAt,
			Date deletedAt) {
 		this.nom = nom;
		this.prenom = prenom;
		this.code = code;
		this.adresse = adresse;
		this.email = email;
		this.telephone = telephone;
		this.id_Stucture = id_Stucture;
		this.etat = etat;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	public Abonnes() {
 	}

	@Override
	public String toString() {
		return "Abonnes [id_Abonne=" + id_Abonne + ", nom=" + nom + ", prenom=" + prenom + ", code=" + code
				+ ", adresse=" + adresse + ", email=" + email + ", telephone=" + telephone + ", id_Stucture="
				+ id_Stucture + ", etat=" + etat + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt
				+ ", deletedAt=" + deletedAt + "]";
	}

	
    
    
    
}