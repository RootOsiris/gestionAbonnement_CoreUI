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
@Table(name = "Services")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Services implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Service;

    @NotBlank
    private String nom;
    
    private Long prixdebase;

	@NotBlank
    private String description;
    
    @NotBlank
    private Long id_Structure;

    private String type;
    
    @NotBlank
    private Long id_CreateUser;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

	public Long getId_Service() {
		return id_Service;
	}

	public void setId_Service(Long id_Service) {
		this.id_Service = id_Service;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getPrixdebase() {
		return prixdebase;
	}

	public void setPrixdebase(Long prixdebase) {
		this.prixdebase = prixdebase;
	}
	
	public Long getId_Structure() {
		return id_Structure;
	}

	public void setId_Structure(Long id_Structure) {
		this.id_Structure = id_Structure;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Long getId_CreateUser() {
		return id_CreateUser;
	}

	public void setId_CreateUser(Long id_CreateUser) {
		this.id_CreateUser = id_CreateUser;
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

	public Services(@NotBlank String nom, Long prixdebase, @NotBlank String description, @NotBlank Long id_Structure,
			String type, @NotBlank Long id_CreateUser, Date createdAt, Date updatedAt) {
		this.nom = nom;
		this.prixdebase = prixdebase;
		this.description = description;
		this.id_Structure = id_Structure;
		this.type = type;
		this.id_CreateUser = id_CreateUser;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Services() {
		
	}

	@Override
	public String toString() {
		return "Services [id_Service=" + id_Service + ", nom=" + nom + ", prixdebase=" + prixdebase + ", description="
				+ description + ", id_Structure=" + id_Structure + ", type=" + type + ", id_CreateUser=" + id_CreateUser
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}
    
}