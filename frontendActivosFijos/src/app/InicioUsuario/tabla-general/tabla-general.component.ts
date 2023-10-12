import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivoService } from 'src/app/Services/Activos/activo.service';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.css']
})
export class TablaGeneralComponent implements OnInit {
  registrosActivos!: any;
  constructor(private router: Router, public fb: FormBuilder, public activoService: ActivoService) {}
  ngOnInit(): void {
    this.activoService.getAllActivos().subscribe(
      response => {
        this.registrosActivos = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de activos mostradas', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el activos', error);
      }
    )
  }

}
