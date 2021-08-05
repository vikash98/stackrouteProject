package com.vikash.pubg.tournament.favourites.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vikash.pubg.tournament.favourites.entity.Matches;
import com.vikash.pubg.tournament.favourites.service.MatchesService;


@RestController
@RequestMapping("/pubg")
@CrossOrigin(origins = "http://localhost:4200")
public class FavouriteController {

	@Autowired
	MatchesService favService;

	@PostMapping("/addFav")
	public Matches addFav(@RequestBody Matches fav) {
		System.out.println(fav);
		return favService.save(fav);
	}
	@GetMapping("/showAllFav")
	public List<Matches>showAllMatches(){
		return favService.showAllMatches();
	}
	@DeleteMapping("/{id}")
	public Matches deleteMatches(@PathVariable("id") int id) {
		return favService.deletMatchesById(id);
	}
	@GetMapping("/{user_id}")
	public Matches getMatchesByUserId(@PathVariable("user_id") int user_id) {
		return favService.getMatchesByUserId(user_id);
	}

}
