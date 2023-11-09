import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { Activo } from 'src/app/Models/activo';
import { Aula } from 'src/app/Models/aula';
import { Bloque } from 'src/app/Models/bloque';
import { Departamento } from 'src/app/Models/departamento';
import { Pais } from 'src/app/Models/pais';
import { Provincia } from 'src/app/Models/provincia';
import { Sucursal } from 'src/app/Models/sucursal';
import { ActivoService } from 'src/app/Services/Activos/activo.service';
import { CustodioService } from 'src/app/Services/Custodio/custodio.service';
import { XlsReporteService } from 'src/app/Services/ExcelReport/xls-reporte.service';
import { GrupoActivoService } from 'src/app/Services/GrupoActivo/grupo-activo.service';
import { MarcasService } from 'src/app/Services/Marcas/marcas.service';
import { PdfReporteService } from 'src/app/Services/PdfReport/pdf-reporte.service';
import { AulaService } from 'src/app/Services/UbicacionServices/Aula/aula.service';
import { BloqueService } from 'src/app/Services/UbicacionServices/Bloque/bloque.service';
import { DepartamentoService } from 'src/app/Services/UbicacionServices/Departamento/departamento.service';
import { PaisService } from 'src/app/Services/UbicacionServices/Pais/pais.service';
import { ProvinciaService } from 'src/app/Services/UbicacionServices/Provincia/provincia.service';
import { SucursalService } from 'src/app/Services/UbicacionServices/Sucursal/sucursal.service';
import { UsuarioService } from 'src/app/Services/Usuarios/usuario.service';



export interface PeriodicElement {
  nombre: string;
  modelo: string;
  idactivo: number;
  valor: number;
  categoria: string;
  custodio: string;
  direccion: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Silla metal', modelo: 'xr34', idactivo: 1, valor: 15000, categoria: 'Muebles', custodio: 'Alberto Flores', direccion: 'Alto seguencoma', },
  {nombre: 'Mesa madera', modelo: 'qress4', idactivo: 4, valor: 2000, categoria: 'Muebles', custodio: 'Bernardo Duran', direccion: 'Alto Obrajes'},
  {nombre: 'Computadora', modelo: 'canto 2023', idactivo: 6, valor: 6000, categoria: 'Computadoras', custodio: 'Vania Patzi', direccion: 'Villa Punta'},

];

@Component({
  selector: 'app-lista-activos-admin',
  templateUrl: './lista-activos-admin.component.html',
  styleUrls: ['./lista-activos-admin.component.css'],

})
export class ListaActivosAdminComponent implements OnInit {

 
  activoForm!: FormGroup;
  activosList!: Activo[];
  marcasList!: any[];
  marcaAux1!: string[];
  custodioList!: any;
  custodioAux1!: string[];
  categoriaList: { id: number, nombre: string, tiempoVida: number, coeficienteAnual: number}[] = [
    { id: 1, nombre: 'Edificaciones', tiempoVida: 40, coeficienteAnual: 2.5},
    { id: 2, nombre: 'Muebles y enseres de oficina', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 3, nombre: 'Maquinaria en general', tiempoVida: 8, coeficienteAnual: 12.5},
    { id: 4, nombre: 'Equipos e instalaciones', tiempoVida: 8, coeficienteAnual: 12.5},
    { id: 5, nombre: 'Barcos y lanchas en general', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 6, nombre: 'Vehículos automotores', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 7, nombre: 'Aviones', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 8, nombre: 'Maquinaria para la construcción', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 9, nombre: 'Maquinaria agrícola', tiempoVida: 4, coeficienteAnual: 25.0},
    { id: 10, nombre: 'Animales de trabajo', tiempoVida: 4, coeficienteAnual: 25.0},
    { id: 11, nombre: 'Herramientas en general', tiempoVida: 4, coeficienteAnual: 25.0},
    { id: 12, nombre: 'Reproductores y hembras pedigree o puros por cruza', tiempoVida: 8, coeficienteAnual: 12.5},
    { id: 13, nombre: 'Equipos de computación', tiempoVida: 4, coeficienteAnual: 25.0},
    { id: 14, nombre: 'Canales de regadío y pozos', tiempoVida: 20, coeficienteAnual: 5},
    { id: 15, nombre: 'Estanques, bañaderos y abrevaderos', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 16, nombre: 'Alambrados, tranqueras y vallas', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 17, nombre: 'Viviendas para el personal', tiempoVida: 20, coeficienteAnual: 5.0},
    { id: 18, nombre: 'Muebles y enseres en las viviendas para el personal', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 19, nombre: 'Silos, almacenes y galpones', tiempoVida: 20, coeficienteAnual: 5.0},
    { id: 20, nombre: 'Tinglados y cobertizos de madera', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 21, nombre: 'Tinglados y cobertizos de metal', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 22, nombre: 'Instalaciones de electrificación y Telefonía rural', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 23, nombre: 'Caminos interiores', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 24, nombre: 'Caña de azúcar', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 25, nombre: 'Vides', tiempoVida: 8, coeficienteAnual: 12.5},
    { id: 26, nombre: 'Frutales', tiempoVida: 10, coeficienteAnual: 10.0},
    { id: 27, nombre: 'Pozos Petroleros', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 28, nombre: 'Líneas de Recolección de la industria Petrolera', tiempoVida: 5, coeficienteAnual: 20.0},
    { id: 29, nombre: 'Equipos de campo de la industria Petrolera', tiempoVida: 8, coeficienteAnual: 12.5},
    { id: 30, nombre: 'Plantas de Procesamiento de Industria Petrolera', tiempoVida: 8, coeficienteAnual: 12.5},
    { id: 31, nombre: 'Ductos de la industria petrolera', tiempoVida: 10, coeficienteAnual: 10.0},
  ];
  categoriaAux1!: string[];
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
  fechas!: string[];
  mesTrascurrido!: number[];
  mesFaltante!: number[];
  auxValorActual!: string[];
  auxValorInicial!: string[];
  auxMestotal!: number[];

  custodio2aux!: string[];
  constructor(private router: Router, private fb: FormBuilder,private xlsService: XlsReporteService,private pdfService: PdfReporteService, private marcasService: MarcasService, private activoService: ActivoService, private custodioService: CustodioService, private grupoService: GrupoActivoService, private paisService: PaisService,private departamentoService: DepartamentoService, private provinciaSerivce: ProvinciaService, private sucursalService: SucursalService, private bloqueService: BloqueService, private aulaService: AulaService) {}
  ngOnInit(): void {
    
    this.getactivos();
    this.getmarca();
    this.auxMestotal = [];
    this.auxValorActual = [];
    this.auxValorInicial = [];   
    this.mesFaltante = [];
    this.mesTrascurrido = [];
    this.grupoAux1 = [];
    this.marcaAux1 = [];
    this.custodioAux1 = [];
    this.paisesAux1 = [];
    this.departamentosAux1 = [];
    this.provinciasAux1 = [];
    this.sucursalesAux1 = [];
    this.bloquesAux1 = [];
    this.aulasAux1 = [];
    this.categoriaAux1 = [];
    this.fechas = [];
    this.getcustodios();   
    this.getgrupo();
    this.getpais();
    this.getdepartamento();
    this.getprovincia();
    this.getsucursal();
    this.getbloque();
    this.getaula();

    setTimeout(() => {     
      this.calcularValorActual();        
      this.asignargrupo();
      this.asignarcustodio();
      this.asignarmarca();
      this.asignarpais();
      this.asignardepartamento();
      this.asignarprovincia();
      this.asignarsucursal();
      this.asignarbloque();
      this.asignaraula();
      this.asignarcategoria();
      this.asignarfechas();
      this.guardarValoresEnString();
      this.asignarTimepoVida();
      this.activosFiltrados = this.activosList;
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
         for (let i = 0; i < this.activosFiltrados.length; i++) {
          for(let j = 0; j < this.grupoList.length; j++){
            if (this.activosFiltrados[i].grupo_id_grupo == this.grupoList[j].id_grupo) {
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
         for (let j = 0; j < this.activosFiltrados.length; j++) {
          for(let i = 0; i < this.marcasList.length; i++){
            if (this.activosFiltrados[j].marca_id_marca == this.marcasList[i].id_marca) {
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
         for (let j = 0; j < this.activosFiltrados.length; j++) {
          for(let i = 0; i < this.custodioList.length; i++){
            if (this.activosFiltrados[j].custodio_id_custodio == this.custodioList[i].id_custodio) {
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
         for (let j = 0; j < this.activosFiltrados.length; j++) {
          for(let i = 0; i < this.paises.length; i++){
            if (this.activosFiltrados[j].pais_id_pais == this.paises[i].id) {
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
         for (let j = 0; j < this.activosFiltrados.length; j++) {
          for(let i = 0; i < this.departamentos.length; i++){
            if (this.activosFiltrados[j].departamento_id_departamento == this.departamentos[i].id_departamento) {
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
         for (let j = 0; j < this.activosFiltrados.length; j++) {
          for(let i = 0; i < this.provincias.length; i++){
            if (this.activosFiltrados[j].provincia_id_provincia == this.provincias[i].id_provincia) {
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
         for (let j = 0; j < this.activosFiltrados.length; j++) {
          for(let i = 0; i < this.sucursales.length; i++){
            if (this.activosFiltrados[j].direccion_id_direccion == this.sucursales[i].id_direccion) {
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
          for (let j = 0; j < this.activosFiltrados.length; j++) {
            for(let i = 0; i < this.bloques.length; i++){
              if (this.activosFiltrados[j].bloque_id_bloque == this.bloques[i].id_bloque) {
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
          for (let j = 0; j < this.activosFiltrados.length; j++) {
            for(let i = 0; i < this.aulas.length; i++){
              if (this.activosFiltrados[j].aula_id_aula == this.aulas[i].id_aula) {
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

    asignarcategoria(){
      this.categoriaAux1 = [];
      setTimeout(() => {
          for (let j = 0; j < this.activosFiltrados.length; j++) {
            for(let i = 0; i < this.categoriaList.length; i++){
              if (this.activosFiltrados[j].activo_categoria == this.categoriaList[i].id) {
                this.categoriaAux1[j] = this.categoriaList[i].nombre;
              }
            }
          }
        }, 2000);
        setTimeout(() => {
          for (let i = 0; i < this.categoriaAux1.length; i++) {
            console.log(this.categoriaAux1[i]);
          }
      }, 3000);
    }

    asignarfechas(){
      this.fechas = [];
      setTimeout(() => {
      for (let i = 0; i < this.activosFiltrados.length; i++) {
        if (this.activosFiltrados[i].activo_fecha != null) {
          const item = this.activosFiltrados[i].activo_fecha.toString();
          this.fechas[i] = item.split('T')[0];
        }
      }
      }, 2000);
      setTimeout(() => {
        for (let i = 0; i < this.fechas.length; i++) {
          console.log(this.fechas[i]);
        }
    }, 3000);
    }
    asignarTimepoVida(){
      this.auxMestotal = [];
      for (let i = 0; i < this.activosList.length; i++) {
        for (let j = 0; j < this.categoriaList.length; j++) {
          if (this.activosList[i].activo_categoria == this.categoriaList[j].id) {
            this.auxMestotal[i] = this.categoriaList[j].tiempoVida;
          }
        }
      }
    }

    generarInforme() {
      this.pdfService.generatePdf(this.grupoAux1,this.fechas,this.activosList, this.marcaAux1, this.custodioAux1, this.categoriaAux1, this.paisesAux1, this.departamentosAux1, this.provinciasAux1, this.sucursalesAux1, this.bloquesAux1, this.aulasAux1, this.mesFaltante, this.mesTrascurrido, this.auxValorActual, this.auxValorInicial, this.auxMestotal);
      this.xlsService.generarInforme(this.grupoAux1,this.fechas,this.activosList, this.marcaAux1, this.custodioAux1, this.categoriaAux1, this.paisesAux1, this.departamentosAux1, this.provinciasAux1, this.sucursalesAux1, this.bloquesAux1, this.aulasAux1, this.mesFaltante, this.mesTrascurrido, this.auxValorActual, this.auxValorInicial, this.auxMestotal);
    }
   
  displayedColumns: string[] = ['nombre grupo','id activo','Nombre activo', 'marca', 'valor actual', 'categoria', 'custodio', 'direccion', 'eliminar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nombre + 1}`;
  }

  filtroBusqueda: string = '';
  activosFiltrados: any[] = this.activosList;
  filtrarUsers() {
    this.activosFiltrados = this.activosList.filter((activo: any) =>
    activo.activo_nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
    activo.id_activo.toString().includes(this.filtroBusqueda)
    );
    this.asignarcustodio();
    this.asignargrupo();
    this.asignarmarca();
    this.asignarpais();
    this.asignardepartamento();
    this.asignarprovincia();
    this.asignarsucursal();
    this.asignarbloque();
    this.asignaraula();
    this.asignarcategoria();
    this.asignarfechas();
  }

    //ACTUALIZAR VALOR ACTIVO
    calcularValorActual(){
      for (let i = 0; i < this.activosList.length; i++) {
        for (let j = 0; j < this.categoriaList.length; j++) {
          if (this.activosList[i].activo_categoria == this.categoriaList[j].id) {
            const fecha1 = new Date(this.activosList[i].activo_fecha);
            const fechaActual = new Date();
            const diff = (fechaActual.getFullYear() - fecha1.getFullYear()) * 12 + (fechaActual.getMonth() - fecha1.getMonth());
            this.activosList[i].activo_valor_actual = this.activosList[i].activo_valor_inicial - (this.activosList[i].activo_valor_inicial * (this.categoriaList[j].coeficienteAnual/(100*12)) * diff);
            console.log("valor actual: "+this.activosList[i].activo_valor_actual);
            //Calcular meses            
            this.mesTrascurrido[i] = diff;
            this.mesFaltante[i] = this.categoriaList[j].tiempoVida*12 - diff;
          }
        }
      }
      setTimeout(() => {    
        for(let i = 0; i < this.activosList.length; i++){
          this.activoService.registerNewActivo(this.activosList[i]).subscribe(
            response => {
              // Manejar la respuesta de éxito aquí
              console.log('Activo actualizado exitosamente: '+i, response);
            },
            error => {
              // Manejar el error aquí
              console.error('Error al actualizar el activo', error);
            }
          )
        }
      }, 2000);
    }

    guardarValoresEnString(){
      this.auxValorActual = [];
      this.auxValorInicial = [];
      for (let i = 0; i < this.activosList.length; i++) {
        this.auxValorInicial[i] = this.activosList[i].activo_valor_inicial.toLocaleString('en-US', { maximumFractionDigits: 2 });
        this.auxValorActual[i] = this.activosList[i].activo_valor_actual.toLocaleString('en-US', { maximumFractionDigits: 2 });
      }
    }

}
