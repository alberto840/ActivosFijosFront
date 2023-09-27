import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MarcasService } from 'src/app/Services/Marcas/marcas.service';

@Component({
  selector: 'app-registro-marca',
  templateUrl: './registro-marca.component.html',
  styleUrls: ['./registro-marca.component.css']
})
export class RegistroMarcaComponent implements OnInit{
  marcaForm!: FormGroup;
  marcasList!: any;
  constructor(private router: Router, public fb: FormBuilder, public marcasService: MarcasService) {}
  ngOnInit(): void {
    this.marcaForm = this.fb.group({
      marca_nombre : ['', Validators.required],
    })
    this.marcasService.getAllMarcas().subscribe(
      response => {
        this.marcasList = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de marcas mostradas', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar las marcas', error);
      }
    )
  }
  registrarMarca(){
    this.marcasService.registerNewMarca(this.marcaForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Marca creada exitosamente', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear la marca', error);
      }
      )
  }
}
