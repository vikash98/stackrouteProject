package com.vikash.pubg.tournament.favourites.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Favourites {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String matchType;
	private String matchCode;
	@ManyToOne(fetch = FetchType.LAZY)
	private User user;
}
