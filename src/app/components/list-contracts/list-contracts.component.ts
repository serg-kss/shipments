import { ContractService } from './../../services/contract.service';
import { Contract } from './../../interfaces/contract';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent {

  contracts: Contract[]

  constructor(public contract: ContractService) { 
    this.contract.getAllContracts().subscribe((res)=>{
      this.contracts = res
    })
  }

  navigateWithState(i:number){

  }



}
