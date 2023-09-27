import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-custodio',
  templateUrl: './registro-custodio.component.html',
  styleUrls: ['./registro-custodio.component.css']
})
export class RegistroCustodioComponent {
  custodio = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    estado: 'activo'
  };

  onSubmit() {
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log(this.custodio);
  }
}
