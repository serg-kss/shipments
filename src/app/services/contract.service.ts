import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../interfaces/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  createContract(
    shipper_form: string, 
    contract_number: string, 
    contract_date: string, 
    payment: string,
    currency: string): Observable<Contract> {
    return this.http.post<Contract>('http://localhost:8080/api/shipments/create-contract', {
      shipper: shipper_form, 
      contract_number: contract_number,
      contract_date: contract_date,
      payment: payment,
      currency: currency
    })
  }

  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>('http://localhost:8080/api/shipments/get-contracts')
  }

  deleteContract(key: string): Observable<Contract> {
    return this.http.post<Contract>('http://localhost:8080/api/shipments/delete-contract', {key: key})
  }

  changeContract(
    key: string, 
    shipper: string, 
    contract_number: string,
    contract_date: string,
    payment: string,
    currency: string
    ): Observable<Contract> {
    return this.http.put<Contract>('http://localhost:8080/api/shipments/change-contract', { 
      key: key, 
      shipper: shipper, 
      contract_number: contract_number,
      contract_date: contract_date,
      payment: payment,
      currency: currency })              
  }
}
