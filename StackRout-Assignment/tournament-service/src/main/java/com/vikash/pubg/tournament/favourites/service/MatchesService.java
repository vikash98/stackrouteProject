package com.vikash.pubg.tournament.favourites.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vikash.pubg.tournament.favourites.entity.Matches;
import com.vikash.pubg.tournament.favourites.repository.MatchesRepository;

@Service
public class MatchesService {
	@Autowired
	MatchesRepository repo;

	public Matches save(Matches fav) {
		return repo.save(fav);
	}

	public List<Matches> showAllMatches() {
		return repo.findAll();
	}

	public Optional<Matches> getByUserId(int user_id) {
		return repo.findById(user_id);
	}

	public Matches getMatchesByUserId(int user_id) {
		return repo.getMatchesByUserId(user_id);
	}

	public Matches deletMatchesById(int id) {
	return repo.deleteById(id);
	}

}
