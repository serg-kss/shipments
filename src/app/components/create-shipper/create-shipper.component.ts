import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShipperService } from 'src/app/services/shipper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-shipper',
  templateUrl: './create-shipper.component.html',
  styleUrls: ['./create-shipper.component.css']
})
export class CreateShipperComponent{

  company_name: string
  company_address: string

  constructor(public shipper: ShipperService, private router: Router) { }

  createShipper(form: NgForm) {
    if (form.valid) {
      this.shipper.createShipper(this.company_name, this.company_address).subscribe((response) => {
        if (response.createShipper == 'Ok') {          
          this.router.navigate(['contracts'])
        } else if (response.createShipper != 'Ok'){
          
        }
      });
    }
  }
}
