import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Activo } from 'src/app/Models/activo';
import { Aula } from 'src/app/Models/aula';
import { Bloque } from 'src/app/Models/bloque';
import { Departamento } from 'src/app/Models/departamento';
import { Marca } from 'src/app/Models/marca';
import { Pais } from 'src/app/Models/pais';
import { Provincia } from 'src/app/Models/provincia';
import { Sucursal } from 'src/app/Models/sucursal';
import { ActivoService } from 'src/app/Services/Activos/activo.service';
import { CustodioService } from 'src/app/Services/Custodio/custodio.service';
import { GrupoActivoService } from 'src/app/Services/GrupoActivo/grupo-activo.service';
import { MarcasService } from 'src/app/Services/Marcas/marcas.service';
import { AulaService } from 'src/app/Services/UbicacionServices/Aula/aula.service';
import { BloqueService } from 'src/app/Services/UbicacionServices/Bloque/bloque.service';
import { DepartamentoService } from 'src/app/Services/UbicacionServices/Departamento/departamento.service';
import { PaisService } from 'src/app/Services/UbicacionServices/Pais/pais.service';
import { ProvinciaService } from 'src/app/Services/UbicacionServices/Provincia/provincia.service';
import { SucursalService } from 'src/app/Services/UbicacionServices/Sucursal/sucursal.service';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.css']
})
export class TablaGeneralComponent implements OnInit {
  activoForm!: FormGroup;
  activosList!: Activo[];
  marcasList!: any[];
  marcaAux1!: string[];
  custodioList!: any;
  custodioAux1!: string[];
  grupoList!: any[];
  grupoAux1!: string[];
  paises!: Pais[];
  paisesAux1!: string[];
  departamentos!: Departamento[];
  departamentosAux1!: string[];
  provincias!: Provincia[];
  provinciasAux1!: string[];
  sucursales!: Sucursal[];
  sucursalesAux1!: string[];
  bloques!: Bloque[];
  bloquesAux1!: string[];
  aulas!: Aula[];
  aulasAux1!: string[];
  registrosActivos!: any;
  categoria!: string[];

  custodio2aux!: string[];
  constructor(private router: Router, private fb: FormBuilder, private marcasService: MarcasService, private activoService: ActivoService, private custodioService: CustodioService, private grupoService: GrupoActivoService, private paisService: PaisService,private departamentoService: DepartamentoService, private provinciaSerivce: ProvinciaService, private sucursalService: SucursalService, private bloqueService: BloqueService, private aulaService: AulaService) {}
  ngOnInit(): void {
    this.getactivos();
    this.getmarca();
    this.grupoAux1 = [];
    this.marcaAux1 = [];
    this.custodioAux1 = [];
    this.paisesAux1 = [];
    this.departamentosAux1 = [];
    this.provinciasAux1 = [];
    this.sucursalesAux1 = [];
    this.bloquesAux1 = [];
    this.aulasAux1 = [];
    this.getcustodios();   
    this.getgrupo();
    this.getpais();
    this.getdepartamento();
    this.getprovincia();
    this.getsucursal();
    this.getbloque();
    this.getaula();

    setTimeout(() => {          
      this.asignargrupo();
      this.asignarcustodio();
      this.asignarmarca();
      this.asignarpais();
      this.asignardepartamento();
      this.asignarprovincia();
      this.asignarsucursal();
      this.asignarbloque();
      this.asignaraula();

    }, 2000);
  }
  getmarca(){
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
  getgrupo(){
    this.grupoService.getAllGrupos().subscribe(
      response => {
        this.grupoList = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de grupos', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar grupos', error);
      }
    )
  }
  getcustodios(){
    this.custodioService.getAllCustodios().subscribe(
      response => {
        this.custodioList = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de custodios', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar custodios', error);
      }
    )
  }
  getactivos(){
    this.activoService.getAllActivos().subscribe(
      response => {
        this.activosList = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de activos', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar activos', error);
      }
    )
  }
  getpais(){
    this.paisService.getAllPaises().subscribe(
      response => {
        this.paises = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de paises', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar los paises', error);
      }
    )
  };
  getdepartamento(){
    this.departamentoService.getAllDepartamentos().subscribe(
      response => {
        this.departamentos = response;
        // Manejar la respuesta de éxito aquí
        console.log('Registros de departamentos', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar los departamentos', error);
      }
    )
  };
  getprovincia(){
    this.provinciaSerivce.getAllProvincia().subscribe(
      response => {
        this.provincias = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de provincias', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar los provincias', error);
      }
    )
  };
  getsucursal(){
    this.sucursalService.getAllSucursales().subscribe(
      response => {
        this.sucursales = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de sucursales', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar sucursales', error);
      }
    )
  };
  getbloque(){
    this.bloqueService.getAllBloque().subscribe(
      response => {
        this.bloques = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de bloques', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar bloques', error);
      }
    )
  };
  getaula(){
    this.aulaService.getAllAulas().subscribe(
      response => {
        this.aulas = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de aulas', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar aulas', error);
      }
    )
  };


   asignargrupo(){
    this.grupoAux1 = [];
     setTimeout(() => {
         for (let i = 0; i < this.activosList.length; i++) {
          for(let j = 0; j < this.grupoList.length; j++){
            if (this.activosList[i].grupo_id_grupo == this.grupoList[j].id_grupo) {
              this.grupoAux1[i] = this.grupoList[j].grupo_nombre;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.grupoAux1.length; i++) {
          console.log(this.grupoAux1[i]);
         }
     }, 3000);
   }

   asignarmarca(){
    this.marcaAux1 = [];
     setTimeout(() => {
         for (let j = 0; j < this.activosList.length; j++) {
          for(let i = 0; i < this.marcasList.length; i++){
            if (this.activosList[j].marca_id_marca == this.marcasList[i].id_marca) {
              this.marcaAux1[j] = this.marcasList[i].marca_nombre;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.marcaAux1.length; i++) {
          console.log(this.marcaAux1[i]);
         }
     }, 3000);
   }

   

   asignarcustodio(){
    this.custodioAux1 = [];
     setTimeout(() => {
         for (let j = 0; j < this.activosList.length; j++) {
          for(let i = 0; i < this.custodioList.length; i++){
            if (this.activosList[j].custodio_id_custodio == this.custodioList[i].id_custodio) {
              this.custodioAux1[j] = this.custodioList[i].custodio_nombre;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.custodioAux1.length; i++) {
          console.log(this.custodioAux1[i]);
         }
     }, 3000);
   }

   asignarpais(){
    this.paisesAux1 = [];
     setTimeout(() => {
         for (let j = 0; j < this.activosList.length; j++) {
          for(let i = 0; i < this.paises.length; i++){
            if (this.activosList[j].pais_id_pais == this.paises[i].id) {
              this.paisesAux1[j] = this.paises[i].pais_nombre;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.paisesAux1.length; i++) {
          console.log(this.paisesAux1[i]);
         }
     }, 3000);
   }

   asignardepartamento(){
    this.departamentosAux1 = [];
     setTimeout(() => {
         for (let j = 0; j < this.activosList.length; j++) {
          for(let i = 0; i < this.departamentos.length; i++){
            if (this.activosList[j].departamento_id_departamento == this.departamentos[i].id_departamento) {
              this.departamentosAux1[j] = this.departamentos[i].departamento_nombre;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.departamentosAux1.length; i++) {
          console.log(this.departamentosAux1[i]);
         }
     }, 3000);
   }
   asignarprovincia(){
    this.provinciasAux1 = [];
     setTimeout(() => {
         for (let j = 0; j < this.activosList.length; j++) {
          for(let i = 0; i < this.provincias.length; i++){
            if (this.activosList[j].provincia_id_provincia == this.provincias[i].id_provincia) {
              this.provinciasAux1[j] = this.provincias[i].provincia_nombre;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.provinciasAux1.length; i++) {
          console.log(this.provinciasAux1[i]);
         }
     }, 3000);
   }

   asignarsucursal(){
    this.sucursalesAux1 = [];
     setTimeout(() => {
         for (let j = 0; j < this.activosList.length; j++) {
          for(let i = 0; i < this.sucursales.length; i++){
            if (this.activosList[j].direccion_id_direccion == this.sucursales[i].id_direccion) {
              this.sucursalesAux1[j] = this.sucursales[i].direccion_zona + this.sucursales[i].direccion_calle;
             }
          }
        }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.sucursalesAux1.length; i++) {
          console.log(this.sucursalesAux1[i]);
         }
     }, 3000);
   }

    asignarbloque(){
      this.bloquesAux1 = [];
      setTimeout(() => {
          for (let j = 0; j < this.activosList.length; j++) {
            for(let i = 0; i < this.bloques.length; i++){
              if (this.activosList[j].bloque_id_bloque == this.bloques[i].id_bloque) {
                this.bloquesAux1[j] = this.bloques[i].bloque_nombre;
              }
            }
          }
        }, 2000);
        setTimeout(() => {
          for (let i = 0; i < this.bloquesAux1.length; i++) {
            console.log(this.bloquesAux1[i]);
          }
      }, 3000);
    }

    asignaraula(){
      this.aulasAux1 = [];
      setTimeout(() => {
          for (let j = 0; j < this.activosList.length; j++) {
            for(let i = 0; i < this.aulas.length; i++){
              if (this.activosList[j].aula_id_aula == this.aulas[i].id_aula) {
                this.aulasAux1[j] = this.aulas[i].aula_nombre;
              }
            }
          }
        }, 2000);
        setTimeout(() => {
          for (let i = 0; i < this.aulasAux1.length; i++) {
            console.log(this.aulasAux1[i]);
          }
      }, 3000);
    }

   
}
