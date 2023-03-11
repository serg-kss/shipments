import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-proformas',
  templateUrl: './list-proformas.component.html',
  styleUrls: ['./list-proformas.component.css']
})
export class ListProformasComponent implements OnInit {
  create_pi: string = 'create-pi';
  constructor() { }

  ngOnInit(): void {
  }

}
