import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../departments/department.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';
import { Matches } from './matches.model';
import { MatchService } from './match.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  sub: any;
  matchedData:any;
  id:any;
  error:string;
  fav = new Matches( '',1);

  constructor(private departmentService:DepartmentService, private matchService:MatchService, private route:ActivatedRoute,private http:HttpClient) { }
  fetchData(matchedId:string){
    this.departmentService.getMatchesByTourmentId(this.id.matchId).subscribe(
      data => {
         this.matchedData=data.data;
      },
      error => {
          this.error = error;
        }
        ); 
  }
  saveFav(matches:Matches){
   this.matchService.saveFav(matches);
   alert('Matches added')
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id=params;
      console.log(this.id);
      this.fetchData(params.id);
    });

  


  }
}
