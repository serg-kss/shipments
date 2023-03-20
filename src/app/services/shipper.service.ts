import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { Shipper } from '../interfaces/shipper';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }

  createShipper(name: string, address: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/shipments/create-shipper', {name: name, address: address})
  }

  getAllShippers(): Observable<Shipper[]> {
    return this.http.get<Shipper[]>('http://localhost:8080/api/shipments/get-shippers')
  }
}
