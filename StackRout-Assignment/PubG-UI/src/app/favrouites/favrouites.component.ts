import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatchService } from '../matches/match.service';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-favrouites',
  templateUrl: './favrouites.component.html',
  styleUrls: ['./favrouites.component.css']
})
export class FavrouitesComponent implements OnInit {
  error:string;
  favList:any;
  constructor(private matchService:MatchService, private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.loadFav();
    
  }
  loadFav(){
    this.matchService.getAllFav().subscribe(
      data => {
        this.favList=data;
      },
      error => {
          this.error = error;
        }
        );
  }
  deleteMatch(id){
    this.matchService.deleteFav(id);
    alert('Record deleted successfully')
    this.loadFav();

  }

}
