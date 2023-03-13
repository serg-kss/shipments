import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  is_auth: boolean = false;
  user: any = {}
  
  authenticate(login: string, password: string): Observable<Auth> {
    return this.http
      .post<Auth>('http://localhost:8080/api/shipments/auth', {login: login, password: password})
      .pipe(tap((response) => {
        this.user = response
        if (this.user[0] == undefined ){
          this.is_auth = false
        }
        else if(this.user[0].login == login && this.user[0].password == password){
          this.is_auth = true
        }
      })        
      );
  }
}
