import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/Usuarios/usuario.service';

@Component({
  selector: 'app-Login-ventana-login',
  templateUrl: './ventana-login.component.html',
  styleUrls: ['./ventana-login.component.css']
})
export class VentanaLoginComponent implements OnInit {

  username: string ='';
  password: string ='';
  flag: boolean=false;
  flag1: boolean=false;

  ngOnInit(): void {
    this.usuarioService.getAllUsuarios().subscribe(
      response => {
        this.users = response;
        // Manejar la respuesta de éxito aquí
        console.log('Students mostrados', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el Students', error);
      }
    )

  }

  users!: any;
  rol: String='';
  mostrarAlertaError = false;
  constructor(private router: Router, public fb: FormBuilder, public usuarioService: UsuarioService){}

  submitForm(){

    for (let i = 0; i < this.users.length; i++) {
      if(this.username == this.users[i].usuario_correo && this.password == this.users[i].usuario_pass){
        this.flag = true;
        console.log("es igual: "+this.users[i].usuario_correo);
        this.rol=this.users[i].usuario_rol;
        break;
      }else{console.log("no es igual: "+this.users[i].usuario_correo); this.flag = false;}
      console.log("students: "+this.users[i].usuario_correo);
    }

    if(this.flag){
      console.log("existe una cuenta"+this.rol);
      if(this.rol=='Lector'){
        console.log("existe cuenta lector");
        this.router.navigate(['lector'], { queryParams: { string: this.username } });
      }
      if(this.rol=='Editor'){
        console.log("existe cuenta editor");
        this.router.navigate(['editor'], { queryParams: { string: this.username } });
      }
      if(this.rol=='Admin'){
        console.log("existe cuenta admin");
        this.router.navigate(['admin'], { queryParams: { string: this.username } });
      }


    }else{
      console.log("no existe cuenta");
      this.mostrarMensajeError();
    }
  }

  mostrarMensajeError() {
    this.mostrarAlertaError = true;
    setTimeout(() => {
      this.cerrarAlerta();
    }, 3000);
  }

  cerrarAlerta() {
    this.mostrarAlertaError = false;
  }
}
