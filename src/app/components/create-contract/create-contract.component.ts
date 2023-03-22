import { ContractService } from './../../services/contract.service';
import { Component } from '@angular/core';
import { Shipper } from 'src/app/interfaces/shipper';
import { ShipperService } from 'src/app/services/shipper.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent {

  shippers_arr: Shipper[];

  shipper_form: string;
  contract_number: string
  contract_date: string   
  payment: string   
  currency: string

  constructor(public shipper: ShipperService, private router: Router, public contract: ContractService) { 
    this.shipper.getAllShippers().subscribe((res)=>{
      this.shippers_arr = res
    })
  }

  createContract(form: NgForm) {
    if (form.valid) {
      this.contract.createContract(
        this.shipper_form, 
        this.contract_number,
        this.contract_date,
        this.payment,
        this.currency
        ).subscribe((response) => {
        if (response.createContract == 'Ok') {          
          this.router.navigate(['contracts'])
        } else if (response.createContract != 'Ok'){
          //error
        }
      });
    }
  }
}
