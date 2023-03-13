import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title = '2C Постачання';
  user: any 
  constructor(public auth: AuthService) { 
    this.user = `${this.auth.user[0].name} ${this.auth.user[0].surname}`;
  }
}
