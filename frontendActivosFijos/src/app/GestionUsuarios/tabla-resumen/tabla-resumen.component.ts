import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ActividadesUserService } from 'src/app/Services/ActividadesUser/actividades-user.service';

@Component({
  selector: 'app-tabla-resumen',
  templateUrl: './tabla-resumen.component.html',
  styleUrls: ['./tabla-resumen.component.css']
})
export class TablaResumenComponent implements OnInit {
  registrosActi!: any;
  constructor(private router: Router, public fb: FormBuilder, public actividadesUserService: ActividadesUserService) {}
  ngOnInit(): void {
    this.actividadesUserService.getAllRegistros().subscribe(
      response => {
        this.registrosActi = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de actividades mostradas', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el registro', error);
      }
    )
    setTimeout(() => {    
    this.activosFiltrados = this.registrosActi;
    }, 1000);
  }

  /*
  goBack(){
    console.log("holasxsadsa");
    this.router.navigate(['homeEnterprise']);
  }*/
  filtroBusqueda: string = '';
  activosFiltrados: any[] = this.registrosActi;
  filtrarActivos() {
    this.activosFiltrados = this.registrosActi.filter((custodio: any) =>
    custodio.usuario_nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
    custodio.id_actividadesUsers.toString().includes(this.filtroBusqueda)
    );
  }

}
