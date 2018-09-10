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
@Table(name = "Prolfiles")
@EntityListeners(AuditingEntityListener.class)

public class Profiles implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Profile;

    @NotBlank
    private String profile;

    @NotBlank
    private String permissions;

	public Long getId_Profile() {
		return id_Profile;
	}

	public void setId_Profile(Long id_Profile) {
		this.id_Profile = id_Profile;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getPermissions() {
		return permissions;
	}

	public void setPermissions(String permissions) {
		this.permissions = permissions;
	}

	public Profiles(@NotBlank String profile, @NotBlank String permissions) {
		
		this.profile = profile;
		this.permissions = permissions;
	}

	public Profiles() {
		
	}

	@Override
	public String toString() {
		return "Profiles [id_Profile=" + id_Profile + ", profile=" + profile + ", permissions=" + permissions + "]";
	}
    
    
}