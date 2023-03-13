import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shipments';
  is_auth: boolean = false;

  constructor(public auth: AuthService){}
  
  closeForm() {
    this.is_auth = true;
  }

}
