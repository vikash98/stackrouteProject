import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const auth_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NjYwMDE2MC1kNjUxLTAxMzktYjY3NS0zYjViM2FiYjhjNjMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjI3OTcxOTU3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymd0cmFpbmluZyJ9.kZRY3lIAX4Ge1qzC5cU_B8kgP8R1lg_ZL-oGxBRcbtc";

pageOfItems:
const headers = new HttpHeaders({
  'accept': 'application/vnd.api+json',
  'Authorization': `Bearer ${auth_token}`
})
@Injectable({
  providedIn: 'root'
})


export class DepartmentService {
  private baseUrl = 'https://api.pubg.com/tournaments'; 
  private matchUrl = 'https://api.pubg.com/tournaments'; 
  private matchesList:any;
  private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();
public matchedDataObject:any=new Object();
public subject=new Subject<any>();
public messageSource=new BehaviorSubject(this.matchedDataObject);
 //private _dataListSource: BehaviorSubject<[]> = new BehaviorSubject([]);
 //dataList: Observable<[]> = this._dataListSource.asObservable();

  constructor(private http:HttpClient) { }
  matchedData:any;
  getAllDepartments( ): Observable<any> {
    console.log(JSON.stringify( this.http.get(this.baseUrl, { headers: headers })));
    return this.http.get(this.baseUrl, { headers: headers })
  }


/*
  addMatches(match: Match): Observable<Match>{
    return this.http.post<Match>(this.baseUrl, user);
  }*/


  getMatchedData(data){
    return this.matchedData
  }

  updateApprovalMessage(message: string) {
 this.approvalStageMessage.next(message)
 }

  public getMatchesByTourmentId(id:any):Observable<any>{
    this.messageSource.next(this.http.get(this.baseUrl, { headers: headers }));
  return this.http.get(this.baseUrl+"/"+id, { headers: headers });
  }




}
