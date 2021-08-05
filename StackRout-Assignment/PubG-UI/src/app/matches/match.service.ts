import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Matches } from './matches.model';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const auth_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NjYwMDE2MC1kNjUxLTAxMzktYjY3NS0zYjViM2FiYjhjNjMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjI3OTcxOTU3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymd0cmFpbmluZyJ9.kZRY3lIAX4Ge1qzC5cU_B8kgP8R1lg_ZL-oGxBRcbtc";
const headers = new HttpHeaders().set('Content-Type', 'application/json');


@Injectable({
  providedIn: 'root'
})

export class MatchService {

  apiData: any;
  fav:Matches;
  deleteStatus:string;
  private baseUrl = 'http://localhost:7070/pubg/'; 
    constructor(private http: HttpClient,  private router: Router){}
    saveFav(matches:any){
        this.fav= new Matches(matches.id,1);
        console.log('saving to the db');
        console.log(JSON.stringify(this.fav))
      //  return this.http.post(this.baseUrl + 'addFav', this.fav, { headers:headers});

        this.http.post<any>('http://localhost:7070/pubg/addFav',this.fav).subscribe(data => {
          console.log(JSON.stringify(data));
          this.router.navigate(['favourites']);
      })
        
    }
    getAllFav():Observable<any>{
      return this.http.get(this.baseUrl+'showAllFav', { headers: headers });

    }
    deleteFav(id: any) {
      this.http.delete(this.baseUrl+id)
        .subscribe(() => this.deleteStatus = 'Delete successful');
    }
   
  }