import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  is_auth: boolean = true;
  
  authenticate(auth: Auth): Observable<Auth> {
    return this.http
      .post<Auth>('https://fakestoreapi.com/auth/login', auth)
      .pipe(tap((response) => {
        console.log(response)})
      );
  }
}
