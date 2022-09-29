import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private myAppUrl : string = 'https://reqres.in/';
  private myApiUrlUser : string = 'api/register';

  constructor(private http: HttpClient) { }

  postUser(userInputs: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrlUser, userInputs);
  }
}
