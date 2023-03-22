import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipper } from '../interfaces/shipper';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }

  createShipper(name: string, address: string): Observable<Shipper> {
    return this.http.post<Shipper>('http://localhost:8080/api/shipments/create-shipper', {name: name, address: address})
  }

  getAllShippers(): Observable<Shipper[]> {
    return this.http.get<Shipper[]>('http://localhost:8080/api/shipments/get-shippers')
  }

  deleteShipper(key: string): Observable<Shipper> {
    return this.http.post<Shipper>('http://localhost:8080/api/shipments/delete-shipper', {key: key})
  }

  changeShipper(key: string, name: string, address: string): Observable<Shipper> {
    return this.http.put<Shipper>('http://localhost:8080/api/shipments/change-shipper', { key: key, name: name, address: address })              
  }
}
