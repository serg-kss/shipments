import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contract } from 'src/app/interfaces/contract';
import { PIproducts } from 'src/app/interfaces/pi-products';
import { Tyre } from 'src/app/interfaces/product';
import { Shipper } from 'src/app/interfaces/shipper';
import { ContractService } from 'src/app/services/contract.service';
import { ProductsService } from 'src/app/services/products.service';
import { ShipperService } from 'src/app/services/shipper.service';

@Component({
  selector: 'app-create-proforma',
  templateUrl: './create-proforma.component.html',
  styleUrls: ['./create-proforma.component.css']
})
export class CreateProformaComponent{

  shippers_arr: Shipper[];
  contracts_arr: Contract[];
  shipper_form: string;
  contract_form: string;
  pi_number: string;
  pi_date: string;
  incoterms: string;
  comment: string;

  key_product: string
  tyre: Tyre[]

  input_class = 'ml-2'


  pi_products_arr: PIproducts[] = []
  @Output() shipper_form_Change = new EventEmitter<string>();
  //@ViewChild("inpt") inpt: ElementRef;

  constructor(
    public shipper: ShipperService, 
    private router: Router, 
    public contract: ContractService,
    public productService: ProductsService) {
    this.shipper.getAllShippers().subscribe((res)=>{
      this.shippers_arr = res
    })

    //this.inpt = {} as ElementRef;
   }

   onShipperChange(model: string){
    this.contract.getSomeContracts(model).subscribe((res)=>{
        this.contracts_arr = res;
    })
   }

   onKeyChange(model: string){    
    this.key_product = model;
   }

   findProduct(){
    console.log(this.key_product)
    //console.log(this.inpt)
    //this.inpt.nativeElement.blur();
    this.productService.getProduct(this.key_product).subscribe((res)=>{
        this.tyre = res;
        console.log(this.tyre)
    })
   }

   add_line(){
    this.pi_products_arr.push({
      key: "",
      description: "",
      units: "",
      price: "",
      total: ""
    })
   }

   delite_line(i: number){
    this.pi_products_arr.splice(i, 1);
   }

   createPI(form: NgForm) {
    if (form.valid) {
     /// this.contract.createContract(
       // this.shipper_form, 
       // this.contract_number,
       // this.contract_date,
       // this.payment,
      //  this.currency
      //  ).subscribe((response) => {
      //  if (response.createContract == 'Ok') {          
       //   this.router.navigate(['contracts'])
       // } else if (response.createContract != 'Ok'){
          //error
      //  }
     // });
    }
  }

}
