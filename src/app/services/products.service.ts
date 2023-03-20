import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { Tyre } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Tyre[] = []

  constructor(private http: HttpClient) { }

  createNewProduct(
    tyre_id: string,
    brand: string,
    size: string,
    model: string,
    sl: string,
    index_speed: string,
    index_load: string,
    type: string,
    sezon: string,
    comment: string,   
    ): Observable<Tyre> {
    return this.http
      .post<Tyre>('http://localhost:8080/api/shipments/create-product', {
        tyre_id: tyre_id,
        brand: brand,
        size: size,
        model: model,
        sl: sl,
        index_speed: index_speed,
        index_load: index_load,
        type: type,
        sezon: sezon,
        comment: comment,
      })
      .pipe(tap((response) => {
        console.log(response);
      })        
      );
  }

  changeProduct(
    id: string,
    tyre_id: string,
    brand: string,
    size: string,
    model: string,
    sl: string,
    index_speed: string,
    index_load: string,
    type: string,
    sezon: string,
    comment: string,   
    ): Observable<Tyre> {
    return this.http
      .put<Tyre>('http://localhost:8080/api/shipments/change-product', {
        id: id,
        tyre_id: tyre_id,
        brand: brand,
        size: size,
        model: model,
        sl: sl,
        index_speed: index_speed,
        index_load: index_load,
        type: type,
        sezon: sezon,
        comment: comment,
      })
      .pipe(tap((response) => {
        console.log(response);
      })        
    );
  }

  deleteProduct(id: string): Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/shipments/delete-product', {id: id})
  }
  
  getAll(): Observable<Tyre[]> {
    return this.http
      .get<Tyre[]>('http://localhost:8080/api/shipments/get-products')
      .pipe(
        tap((response) => (this.products = response)),
      );
  }
}
