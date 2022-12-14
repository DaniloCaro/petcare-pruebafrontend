import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatausersService {

  private myAppUrl : string = 'https://reqres.in/';
  private myApiUrl : string = 'api/users/';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
