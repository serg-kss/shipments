import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipperService } from 'src/app/services/shipper.service';

@Component({
  selector: 'app-shipper-info',
  templateUrl: './shipper-info.component.html',
  styleUrls: ['./shipper-info.component.css']
})
export class ShipperInfoComponent {

  data: any;
  corrections: boolean = false;
  key: string;

  name: string;
  address: string;

  constructor(private router: Router, public shipper: ShipperService) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    this.name = this.data.name;
    this.address = this.data.address;
    this.key = this.data.name;
  }

  changeShipper(form: NgForm){
    if (form.valid) {
      this.shipper.changeShipper(
        this.key,
        this.name,
        this.address        
        ).subscribe(() => {
          this.router.navigate(['contracts'])
      });
    }
  }

  back(){
    this.router.navigate(['contracts'])
  }

  correction_btn(){
    this.corrections = true;
  }

  deleteShipper(){
    this.shipper.deleteShipper(this.key).subscribe((res)=>{
      if(res.deleteShipper == 'Ok'){
        this.router.navigate(['contracts'])
      }else {
        //error message
      }
    })
  }

  backForm(){
    this.corrections = false;
  }
  
}
