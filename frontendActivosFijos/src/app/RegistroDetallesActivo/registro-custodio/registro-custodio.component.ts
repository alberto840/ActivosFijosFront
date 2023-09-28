import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustodioService } from 'src/app/Services/Custodio/custodio.service';

@Component({
  selector: 'app-registro-custodio',
  templateUrl: './registro-custodio.component.html',
  styleUrls: ['./registro-custodio.component.css']
})
export class RegistroCustodioComponent implements OnInit{
  custodioForm!: FormGroup;
  custodioList!: any;
  constructor(private router: Router, public fb: FormBuilder, public custodioService: CustodioService) {}
  ngOnInit(): void {
    this.custodioForm = this.fb.group({
      custodio_nombre : ['', Validators.required],
      custodio_apellido_paterno : ['', Validators.required],
      custodio_apellido_materno : ['', Validators.required],
      custodio_telefono : ['', Validators.required],
      custodio_correo : ['', Validators.required],
      custodio_estado : ['', Validators.required],
    })
    this.custodioService.getAllCustodios().subscribe(
      response => {
        this.custodioList = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de marcas mostradas', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar las marcas', error);
      }
    )
  }
  registrarCustodio(){
    this.custodioService.registerNewCustodio(this.custodioForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Custodio creado exitosamente', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear custodio', error);
      }
      )
  }
}
