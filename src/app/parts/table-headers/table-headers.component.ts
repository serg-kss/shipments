import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-headers',
  templateUrl: './table-headers.component.html',
  styleUrls: ['./table-headers.component.css']
})
export class TableHeadersComponent implements OnInit {
  @Input() redir: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate([this.redir])
  }
}
