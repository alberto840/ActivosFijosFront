import { Component } from '@angular/core';

@Component({
  selector: 'app-Login-ventana-login',
  templateUrl: './ventana-login.component.html',
  styleUrls: ['./ventana-login.component.css']
})
export class VentanaLoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    }
}
