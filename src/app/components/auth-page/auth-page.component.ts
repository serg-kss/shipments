import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  public title: string = '2C Постачання';
  public auth_error: boolean = false;
  public auth_error_message: string = 'Не вдалося! Спробуйте ще!';
  public login: string;
  public password: string;  

  constructor(public auth: AuthService) { }

  @Output() onExit = new EventEmitter();

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.login, this.password).subscribe(() => {
        if (this.auth.is_auth) {          
          this.onExit.emit();
        } else if (!this.auth.is_auth){
          this.auth_error = true;
        }
      });
    }
  }
}


