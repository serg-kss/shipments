import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {
  create_invoice: string = 'create-invoices';
  constructor() { }

  ngOnInit(): void {
  }

}
