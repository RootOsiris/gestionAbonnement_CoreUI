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
@Table(name = "Users")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt","deletedAt"}, 
        allowGetters = true)
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_User;

    private String nom;

    private String prenom;
    
    private String login;

    private String mdp;
    
    private String email;

    private String telephone;
    
    private Long id_Profile;
    
    private Boolean etat;
    
    @Column(name = "id_CreateUser")
    @CreatedBy
    private Long id_CreateUser;

    @Column(nullable = true, updatable = false)
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

	public Long getId_User() {
		return id_User;
	}

	public void setId_User(Long id_User) {
		this.id_User = id_User;
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

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
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

	public Long getId_Profile() {
		return id_Profile;
	}

	public void setId_Profile(Long id_Profile) {
		this.id_Profile = id_Profile;
	}

	public Boolean getEtat() {
		return etat;
	}

	public void setEtat(Boolean etat) {
		this.etat = etat;
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

	public Users(@NotBlank String nom, @NotBlank String prenom, @NotBlank String login, @NotBlank String mdp,
			String email, @NotBlank String telephone, Long id_Profile, Boolean etat, @NotBlank Long id_CreateUser,
			Date createdAt, Date updatedAt, Date deletedAt) {
 		this.nom = nom;
		this.prenom = prenom;
		this.login = login;
		this.mdp = mdp;
		this.email = email;
		this.telephone = telephone;
		this.id_Profile = id_Profile;
		this.etat = etat;
		this.id_CreateUser = id_CreateUser;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	public Users() {
 	}

	@Override
	public String toString() {
		return "Users [id_User=" + id_User + ", nom=" + nom + ", prenom=" + prenom + ", login=" + login + ", mdp=" + mdp
				+ ", email=" + email + ", telephone=" + telephone + ", id_Profile=" + id_Profile + ", etat=" + etat
				+ ", id_CreateUser=" + id_CreateUser + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt
				+ ", deletedAt=" + deletedAt + "]";
	}


	
	
    
}
