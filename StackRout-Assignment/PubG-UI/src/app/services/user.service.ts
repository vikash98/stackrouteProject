import { User } from '../auth/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseUrl = 'http://localhost:8080/user/'; 
    constructor(private http: HttpClient){}
    getAllUsers(): Observable<any>{
      console.log("all users::"+JSON.stringify(this.http.get(this.baseUrl+'allusers', {responseType:'text'})));
        return this.http.get(this.baseUrl+'allusers', {responseType:'text'})
                        .pipe(catchError(this.handleError));
    }
    getByUserRole():  Observable<any>{
      return this.http.get(this.baseUrl+'displayuser', {responseType:'text'})
                      .pipe(catchError(this.handleError));
    }
    getByAdminRole():  Observable<any>{
      return this.http.get(this.baseUrl+'displayadmin', {responseType:'text'})
                      .pipe(catchError(this.handleError));
    }

    private handleError(httpError: HttpErrorResponse) {
      let message:string = '';
      if (httpError.error instanceof ProgressEvent) {
        console.log('in progrss event')
        message = "Network error";
      }
     
      else {
        message = JSON.parse(httpError.error).message;
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(           
          `Backend returned code ${httpError.status}, ` +
          `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later. Error Message- ' + message);
    }
}