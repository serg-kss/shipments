import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Shipper } from 'src/app/interfaces/shipper';
import { ShipperService } from 'src/app/services/shipper.service';

@Component({
  selector: 'app-list-shippers',
  templateUrl: './list-shippers.component.html',
  styleUrls: ['./list-shippers.component.css']
})
export class ListShippersComponent {

  shippers: Shipper[] = []

  constructor(private router: Router, public shipper: ShipperService) { 
    this.shipper.getAllShippers().subscribe((response)=>{
      this.shippers = response;
      console.log(this.shippers)
    })
  }

  newConsignee(){
    this.router.navigate(['create-shipper'])
  }

  newContract(){
    this.router.navigate(['create-contract'])
  }

  navigateWithState(i:number): void {
    this.router.navigateByUrl('shippers/info', {state: this.shippers[i]});
  }

}
