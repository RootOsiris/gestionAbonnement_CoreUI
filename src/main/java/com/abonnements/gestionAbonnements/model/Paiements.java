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
@Table(name = "Paiements")
@EntityListeners(AuditingEntityListener.class)

public class Paiements implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Paiement;

    @NotBlank
    private String paiement;

	public Long getId_Paiement() {
		return id_Paiement;
	}

	public void setId_Paiement(Long id_Paiement) {
		this.id_Paiement = id_Paiement;
	}

	public String getPaiement() {
		return paiement;
	}

	public void setPaiement(String paiement) {
		this.paiement = paiement;
	}

	public Paiements(@NotBlank String paiement) {
		
		this.paiement = paiement;
	}

	public Paiements() {
		
	}

	@Override
	public String toString() {
		return "Paiements [id_Paiement=" + id_Paiement + ", paiement=" + paiement + "]";
	}
    
    
}