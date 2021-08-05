package com.vikash.pubg.tournament.favourites.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vikash.pubg.tournament.favourites.entity.Matches;
@Repository
public interface MatchesRepository  extends JpaRepository<Matches, Integer>{
	public Matches getMatchesByUserId(int id);

	public Matches deleteById(int id);
}
