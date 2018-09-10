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
@Table(name = "Abonnements")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
allowGetters = true)
public class Abonnements implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Abonne;

    @NotBlank
    private Long id_Service;

    @NotBlank
    private Long id_Paiement;
    
    private Long id_Tarif;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

	public Long getId_Abonne() {
		return id_Abonne;
	}

	public void setId_Abonne(Long id_Abonne) {
		this.id_Abonne = id_Abonne;
	}

	public Long getId_Service() {
		return id_Service;
	}

	public void setId_Service(Long id_Service) {
		this.id_Service = id_Service;
	}

	public Long getId_Paiement() {
		return id_Paiement;
	}

	public void setId_Paiement(Long id_Paiement) {
		this.id_Paiement = id_Paiement;
	}

	public Long getId_Tarif() {
		return id_Tarif;
	}

	public void setId_Tarif(Long id_Tarif) {
		this.id_Tarif = id_Tarif;
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

	public Abonnements(@NotBlank Long id_Service, @NotBlank Long id_Paiement, Long id_Tarif, Date createdAt,
			Date updatedAt) {
		this.id_Service = id_Service;
		this.id_Paiement = id_Paiement;
		this.id_Tarif = id_Tarif;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Abonnements() {
	}

	@Override
	public String toString() {
		return "Abonnements [id_Abonne=" + id_Abonne + ", id_Service=" + id_Service + ", id_Paiement=" + id_Paiement
				+ ", id_Tarif=" + id_Tarif + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}
    
    
    
}