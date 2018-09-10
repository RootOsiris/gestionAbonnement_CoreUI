package com.abonnements.gestionAbonnements;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GestionAbonnementsApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionAbonnementsApplication.class, args);
	}
}
