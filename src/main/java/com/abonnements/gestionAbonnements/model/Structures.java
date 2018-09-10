package com.abonnements.gestionAbonnements.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Structures")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt","deletedAt"}, 
allowGetters = true)
public class Structures implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Structure;

    
    private String denomination;
    
  
    private String code;

    
    private String description;
    
    
    private String adresse;

    
    private Long statut;
    
    private Boolean etat;
    
    private Long id_Parent;

   
    @Column(name = "id_CreateUser")
    @CreatedBy
    private Long id_CreateUser;

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

	public Long getId_Structure() {
		return id_Structure;
	}

	public void setId_Structure(Long id_Structure) {
		this.id_Structure = id_Structure;
	}

	public String getDenomination() {
		return denomination;
	}

	public void setDenomination(String denomination) {
		this.denomination = denomination;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public Long getStatut() {
		return statut;
	}

	public void setStatut(Long statut) {
		this.statut = statut;
	}

	public Boolean getEtat() {
		return etat;
	}

	public void setEtat(Boolean etat) {
		this.etat = etat;
	}

	public Long getId_Parent() {
		return id_Parent;
	}

	public void setId_Parent(Long id_Parent) {
		this.id_Parent = id_Parent;
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

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public Structures(@NotBlank String denomination, @NotBlank String code, @NotBlank String description,
			@NotBlank String adresse, Long statut, Boolean etat, Long id_Parent, @NotBlank Long id_CreateUser,
			Date createdAt, Date updatedAt, Date deletedAt) {
 		this.denomination = denomination;
		this.code = code;
		this.description = description;
		this.adresse = adresse;
		this.statut = statut;
		this.etat = etat;
		this.id_Parent = id_Parent;
		this.id_CreateUser = id_CreateUser;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	public Structures() {
 	}

	@Override
	public String toString() {
		return "Structures [id_Structure=" + id_Structure + ", denomination=" + denomination + ", code=" + code
				+ ", description=" + description + ", adresse=" + adresse + ", statut=" + statut + ", etat=" + etat
				+ ", id_Parent=" + id_Parent + ", id_CreateUser=" + id_CreateUser + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + ", deletedAt=" + deletedAt + "]";
	}

	
    
	
    
}