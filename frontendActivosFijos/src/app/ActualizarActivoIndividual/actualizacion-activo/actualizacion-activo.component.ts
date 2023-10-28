import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { GrupoActivoService } from 'src/app/Services/GrupoActivo/grupo-activo.service';
import { MarcasService } from 'src/app/Services/Marcas/marcas.service';
import { AulaService } from 'src/app/Services/UbicacionServices/Aula/aula.service';
import { BloqueService } from 'src/app/Services/UbicacionServices/Bloque/bloque.service';
import { DepartamentoService } from 'src/app/Services/UbicacionServices/Departamento/departamento.service';
import { PaisService } from 'src/app/Services/UbicacionServices/Pais/pais.service';
import { ProvinciaService } from 'src/app/Services/UbicacionServices/Provincia/provincia.service';
import { SucursalService } from 'src/app/Services/UbicacionServices/Sucursal/sucursal.service';

interface Animal {
  name: string;
  sound: string;
}
export interface PeriodicElement {
  fecha: string;
  custodio: string;
  direccion: string;
  valor: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '12/05/2023', custodio: 'Alberto flores', direccion: 'Alto seguencoma', valor: 200},
  {fecha: '12/05/2023', custodio: 'Bernardo Duran', direccion: 'Alto Obrajes', valor: 2000},
  {fecha: '12/05/2023', custodio: 'Vania Patzi', direccion: 'Villa Punta', valor: 60},
];
@Component({
  selector: 'app-actualizacion-activo',
  templateUrl: './actualizacion-activo.component.html',
  styleUrls: ['./actualizacion-activo.component.css']
})
export class ActualizacionActivoComponent implements OnInit {
  activoForm!: FormGroup;
  activosList!: any;
  marcasList!: any;
  custodioList!: any;
  grupoList!: any;
  auxCustodio: string='';
  auxGrupo: string='';
  paises!: Pais[];
  departamentos!: Departamento[];
  provincias!: Provincia[];
  sucursales!: Sucursal[];
  bloques!: Bloque[];
  aulas!: Aula[];
  constructor(private router: Router, public fb: FormBuilder, public marcasService: MarcasService, public activoService: ActivoService, public custodioService: CustodioService, public grupoService: GrupoActivoService, private paisService: PaisService,private departamentoService: DepartamentoService, private provinciaSerivce: ProvinciaService, private sucursalService: SucursalService, private bloqueService: BloqueService, private aulaService: AulaService) {}
  ngOnInit(): void {
    this.getmarca();
    this.getactivos();
    this.getcustodios();
    this.getgrupo();
    this.getpais();
    this.getdepartamento();
    this.getprovincia();
    this.getsucursal();
    this.getbloque();
    this.getaula();
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
  mostrarAlerta = false;
  mostrarAlertaError = false;
  mostrarMensajeRegistroExito() {
    this.mostrarAlerta = true;
    setTimeout(() => {
      this.cerrarAlerta();
    }, 3000);
  }
  mostrarMensajeRegistroError() {
    this.mostrarAlertaError = true;
    setTimeout(() => {
      this.cerrarAlerta();
    }, 3000);
  }
  cerrarAlerta() {
    this.mostrarAlerta = false;
    this.mostrarAlertaError = false;
  }
  //lista cutre de activos
  activos: any[] = [
    { id_activo: 1, activo_nombre: 'Activo a' },
    { id_activo: 2, activo_nombre: 'Activo b' },
    { id_activo: 3, activo_nombre: 'Activo c' },
    // Agrega más activos a la lista
  ];

  filtroBusqueda: string = '';
  activosFiltrados: Activo[] = [];
  filtrarActivos() {
    this.activosFiltrados = this.activosList.filter((activo: Activo) =>
      activo.activo_nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
      activo.id_activo.toString().includes(this.filtroBusqueda)
    );
  }
  seleccionarActivo(activo: Activo) {
    console.log('Activo seleccionado: ', activo.id_activo);
    this.activoSeleccionado = activo;
    for(let i = 0; i < this.custodioList.length; i++){
      if(this.custodioList[i].id_custodio == activo.custodio_id_custodio){
        this.auxCustodio = this.custodioList[i].custodio_nombre;
      }
    }
    for(let i = 0; i < this.grupoList.length; i++){
      if(this.grupoList[i].id_grupo == activo.grupo_id_grupo){
        this.auxGrupo = this.grupoList[i].grupo_nombre;
      }
    }
    //falta direcciones
  }
  selectedActivo?: number;
  activoSeleccionado: Activo = {id_activo: 0, activo_nombre: '', activo_fecha: new Date(), activo_categoria: 0, marca_id_marca: 0, activo_comprobante: '', pais_id_pais: 0, departamento_id_departamento: 0, provincia_id_provincia: 0, direccion_id_direccion: '', bloque_id_bloque: 0, aula_id_aula: 0, activo_valor_inicial: 0, activo_valor_actual: 0, custodio_id_custodio: '', activo_detalle: '', activo_estado: '', grupo_id_grupo: 0};

  //---------------------------------------
  displayedColumns: string[] = ['fecha', 'custodio', 'direccion', 'valor'];
  dataSource = ELEMENT_DATA;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
