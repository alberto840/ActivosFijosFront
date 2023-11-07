import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Activo } from 'src/app/Models/activo';
import { Aula } from 'src/app/Models/aula';
import { Bloque } from 'src/app/Models/bloque';
import { Departamento } from 'src/app/Models/departamento';
import { Historial } from 'src/app/Models/historial';
import { Pais } from 'src/app/Models/pais';
import { Provincia } from 'src/app/Models/provincia';
import { Sucursal } from 'src/app/Models/sucursal';
import { ActivoService } from 'src/app/Services/Activos/activo.service';
import { CustodioService } from 'src/app/Services/Custodio/custodio.service';
import { GrupoActivoService } from 'src/app/Services/GrupoActivo/grupo-activo.service';
import { HistorialActivoService } from 'src/app/Services/HistorialActivo/historial-activo.service';
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
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '24/05/2023', custodio: 'Hydrogen', direccion: '1.0079', valor: 222, estado: 'Mantenimiento' },
  {fecha: '4/06/2023', custodio: 'Helium', direccion: '4.0026', valor: 100, estado: 'activo'},
  {fecha: '30/05/2023', custodio: 'Lithium', direccion: '6.941', valor: 2.4, estado: 'de baja'},
  
];
@Component({
  selector: 'app-lector-detalle-activo',
  templateUrl: './lector-detalle-activo.component.html',
  styleUrls: ['./lector-detalle-activo.component.css']
})
export class LectorDetalleActivoComponent {
  //qr
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
  selectedCountry?: number;
  selectedCountryText?: string;
  selectedDepartment?: number;
  selectedDepartmentText?: string;
  selectedProvincia?: number;
  selectedProvinciaText?: string;
  selectedSucursal?: number;
  selectedSucursalText?: string;
  selectedBloque?: number;
  selectedBloqueText?: string;
  selectedAula?: number = 0;
  selectedAulaText?: string;
  histrialActivoForm!: FormGroup;
  activoAux!: any;

  activoForm!: FormGroup;
  activosList!: any;
  marcasList!: any;
  custodioList!: any;
  grupoList!: any;
  auxCustodio: string='';
  auxGrupo: string='';
  auxDireccion: string='';
  auxMarcas: string='';
  paises!: Pais[];
  departamentos!: Departamento[];
  departamentosAux1! : Departamento[];
  provincias!: Provincia[];
  provinciasAux1! : Provincia[];
  sucursales!: Sucursal[];
  sucursalesAux1! : Sucursal[];
  bloques!: Bloque[];
  bloquesAux1! : Bloque[];
  aulas!: Aula[];
  aulasAux1! : Aula[];
  historialList!: Historial[];
  historiaAux1!: Historial[];

  custodio2aux!: string[];
  direccion2aux!: string[];
  user2aux!: string[];
  pais2aux!: string[];
  departamento2aux!: string[];
  provincia2aux!: string[];
  sucursal2aux!: string[];
  bloque2aux!: string[];
  aula2aux!: string[];
  grupo2aux!: string[];


  onCountryChange() {
    this.departamentosAux1= [];
    setTimeout(() => {
      console.log("hola1"+this.selectedCountry);
    for(let i = 0; i < this.departamentos.length; i++){
      console.log("holaxd");
      if(this.selectedCountry==this.departamentos[i].pais_id_pais){
        console.log("si "+this.selectedCountry+" soy "+this.departamentos[i].pais_id_pais);
        this.departamentosAux1.push(this.departamentos[i]);
      }
    }
    }, 1000);

    setTimeout(() => {
      for (let i = 0; i < this.departamentosAux1.length; i++) {
        const elemento = this.departamentosAux1[i];
        console.log(elemento);
      }
      }, 2000);

  }
  onDepartmentChange() {
    this.provinciasAux1= [];
    setTimeout(() => {
      console.log("hola1"+this.selectedDepartment);
    for(let i = 0; i < this.provincias.length; i++){
      console.log("holaxd");
      if(this.selectedDepartment==this.provincias[i].departamento_id_departamento){
        console.log("si "+this.selectedDepartment+" soy "+this.provincias[i].departamento_id_departamento);
        this.provinciasAux1.push(this.provincias[i]);
      }
    }
    }, 1000);

    setTimeout(() => {
      for (let i = 0; i < this.provinciasAux1.length; i++) {
        const elemento = this.provinciasAux1[i];
        console.log(elemento);
      }
      }, 2000);

  }
  onProvinciaChange() {
    this.sucursalesAux1= [];
    setTimeout(() => {
      console.log("hola1"+this.selectedProvincia);
    for(let i = 0; i < this.sucursales.length; i++){
      console.log("holaxd");
      if(this.selectedProvincia==this.sucursales[i].provincia_id_provincia){
        console.log("si "+this.selectedProvincia+" soy "+this.sucursales[i].provincia_id_provincia);
        this.sucursalesAux1.push(this.sucursales[i]);
      }
    }
    }, 1000);

    setTimeout(() => {
      for (let i = 0; i < this.sucursalesAux1.length; i++) {
        const elemento = this.sucursalesAux1[i];
        console.log(elemento);
      }
      }, 2000);

  }
  onSucursalChange() {
    this.bloquesAux1= [];
    setTimeout(() => {
      console.log("hola1"+this.selectedSucursal);
    for(let i = 0; i < this.bloques.length; i++){
      console.log("holaxd");
      if(this.selectedSucursal==this.bloques[i].direccion_id_direccion){
        console.log("si "+this.selectedSucursal+" soy "+this.bloques[i].direccion_id_direccion);
        this.bloquesAux1.push(this.bloques[i]);
      }
    }
    }, 1000);

    setTimeout(() => {
      for (let i = 0; i < this.bloquesAux1.length; i++) {
        const elemento = this.bloquesAux1[i];
        console.log(elemento);
      }
      }, 2000);

  }
  onBloqueChange() {
    this.aulasAux1= [];
    setTimeout(() => {
      console.log("hola1"+this.selectedBloque);
    for(let i = 0; i < this.aulas.length; i++){
      console.log("holaxd");
      if(this.selectedBloque==this.aulas[i].bloque_id_bloque){
        console.log("si "+this.selectedBloque+" soy "+this.aulas[i].bloque_id_bloque);
        this.aulasAux1.push(this.aulas[i]);
      }
    }
    }, 1000);

    setTimeout(() => {
      for (let i = 0; i < this.aulasAux1.length; i++) {
        const elemento = this.aulasAux1[i];
        console.log(elemento);
      }
      }, 2000);

  }

  registrarActivo(){
    this.activoForm.value.id_activo = this.activoSeleccionado.id_activo;
    this.activoForm.value.activo_nombre = this.activoSeleccionado.activo_nombre;
    this.activoForm.value.activo_fecha = this.activoSeleccionado.activo_fecha;
    this.activoForm.value.activo_categoria = this.activoSeleccionado.activo_categoria;
    this.activoForm.value.marca_id_marca = this.activoSeleccionado.marca_id_marca;
    this.activoForm.value.activo_comprobante = this.activoSeleccionado.activo_comprobante;
    this.activoForm.value.activo_estado = this.activoSeleccionado.activo_estado;
    this.activoForm.value.activo_valor_inicial = this.activoSeleccionado.activo_valor_inicial;
    this.activoForm.value.activo_valor_actual = this.activoSeleccionado.activo_valor_actual;
    this.activoForm.value.activo_detalle = this.activoSeleccionado.activo_detalle;
      this.activoService.registerNewActivo(this.activoForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Activo creado exitosamente', response);
          this.activoAux = response.datos;
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear Activo', error, "el activo: ", this.activoForm.value);
          this.mostrarMensajeRegistroError();
        }
        )
        setTimeout(() => {
          this.histrialActivoForm.value.activo_id_activo = this.activoAux.id_activo;
          this.histrialActivoForm.value.activo_nombre = this.activoAux.activo_nombre;
          this.histrialActivoForm.value.activo_fecha = this.activoAux.activo_fecha;
          this.histrialActivoForm.value.activo_categoria = this.activoAux.activo_categoria;
          this.histrialActivoForm.value.marca_id_marca = this.activoAux.marca_id_marca;
          this.histrialActivoForm.value.activo_comprobante = this.activoAux.activo_comprobante;
          this.histrialActivoForm.value.activo_estado = this.activoAux.activo_estado;
          this.histrialActivoForm.value.activo_valor_inicial = this.activoAux.activo_valor_inicial;
          this.histrialActivoForm.value.activo_valor_actual = this.activoAux.activo_valor_actual;
          this.histrialActivoForm.value.activo_detalle = this.activoAux.activo_detalle;
          this.histrialActivoForm.value.activo_estado_uso = this.activoAux.activo_estado_uso;
          this.histrialActivoForm.value.grupo_id_grupo = this.activoAux.grupo_id_grupo;
          this.histrialActivoForm.value.custodio_id_custodio = this.activoAux.custodio_id_custodio;
          this.histrialActivoForm.value.usuario_historial = 2;
          this.histrialActivoForm.value.valor_historial = this.activoAux.activo_valor_actual;
          this.histrialActivoForm.value.activo_fecha_historial = Date.now();
          this.histrialActivoForm.value.pais_id_pais = this.activoAux.pais_id_pais;
          this.histrialActivoForm.value.departamento_id_departamento = this.activoAux.departamento_id_departamento;
          this.histrialActivoForm.value.provincia_id_provincia = this.activoAux.provincia_id_provincia;
          this.histrialActivoForm.value.direccion_id_direccion = this.activoAux.direccion_id_direccion;
          this.histrialActivoForm.value.bloque_id_bloque = this.activoAux.bloque_id_bloque;
          this.histrialActivoForm.value.aula_id_aula = this.activoAux.aula_id_aula;
          this.historialService.registerNewGistorial(this.histrialActivoForm.value).subscribe(
            response => {
              // Manejar la respuesta de éxito aquí
              console.log('Historial creado exitosamente', response);
              this.mostrarMensajeRegistroExito();
              setTimeout(() => {
              this.gethistorial();
              }, 1000);
            },
            error => {
              // Manejar el error aquí
              console.error('Error al crear Historial', error, "el historial: ", this.histrialActivoForm.value);
              this.mostrarMensajeRegistroError();
            }
            )
          }, 2000);
  }
  constructor(private router: Router, public fb: FormBuilder,public historialService: HistorialActivoService, public marcasService: MarcasService, public activoService: ActivoService, public custodioService: CustodioService, public grupoService: GrupoActivoService, private paisService: PaisService,private departamentoService: DepartamentoService, private provinciaSerivce: ProvinciaService, private sucursalService: SucursalService, private bloqueService: BloqueService, private aulaService: AulaService) {
    this.myAngularxQrCode = 'QR vacio, no seleccionaste un activo';
  }
  ngOnInit(): void {
    this.activoForm = this.fb.group({
      id_activo : ['', Validators.required],
      activo_nombre : ['', Validators.required],
      activo_fecha : ['', Validators.required],
      activo_categoria : ['', Validators.required],
      marca_id_marca : ['', Validators.required],
      activo_comprobante : ['', Validators.required],
      pais_id_pais : ['', Validators.required],
      departamento_id_departamento : ['', Validators.required],
      provincia_id_provincia : ['', Validators.required],
      direccion_id_direccion : ['', Validators.required],
      bloque_id_bloque : ['', Validators.required],
      aula_id_aula : ['', Validators.required],
      activo_valor_inicial : ['', Validators.required],
      activo_valor_actual : ['', Validators.required],
      custodio_id_custodio : ['', Validators.required],
      activo_detalle : ['', Validators.required],
      activo_estado : ['', Validators.required],
      activo_estado_uso : ['', Validators.required],
      grupo_id_grupo : ['', Validators.required],
    })
    this.histrialActivoForm = this.fb.group({
      id_historial : ['', Validators.required],
      activo_id_activo : ['', Validators.required],
      activo_fecha_historial : ['', Validators.required],
      usuario_historial : ['', Validators.required],
      valor_historial : ['', Validators.required],
      activo_nombre : ['', Validators.required],
      activo_fecha : ['', Validators.required],
      activo_categoria : ['', Validators.required],
      marca_id_marca : ['', Validators.required],
      activo_comprobante : ['', Validators.required],
      pais_id_pais : ['', Validators.required],
      departamento_id_departamento : ['', Validators.required],
      provincia_id_provincia : ['', Validators.required],
      direccion_id_direccion : ['', Validators.required],
      bloque_id_bloque : ['', Validators.required],
      aula_id_aula : ['', Validators.required],
      activo_valor_inicial : ['', Validators.required],
      activo_valor_actual : ['', Validators.required],
      custodio_id_custodio : ['', Validators.required],
      activo_detalle : ['', Validators.required],
      activo_estado : ['', Validators.required],
      activo_estado_uso : ['', Validators.required],
      grupo_id_grupo : ['', Validators.required],
    })
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
    this.gethistorial();
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
  gethistorial(){
    this.historialService.getAllHistorial().subscribe(
      response => {
        this.historialList = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de historial', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar historial', error);
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
    for(let i = 0; i < this.marcasList.length; i++){
      if(this.marcasList[i].id_marca == activo.marca_id_marca){
        this.auxMarcas = this.marcasList[i].marca_nombre;
      }
    }
    for(let i = 0; i < this.paises.length; i++){
      if(this.paises[i].id == activo.pais_id_pais){
        this.auxDireccion = this.paises[i].pais_nombre;
      }
    }
    for(let i = 0; i < this.departamentos.length; i++){
      if(this.departamentos[i].id_departamento == activo.departamento_id_departamento){
        this.auxDireccion = this.auxDireccion + ', ' + this.departamentos[i].departamento_nombre;
      }
    }
    for(let i = 0; i < this.provincias.length; i++){
      if(this.provincias[i].id_provincia == activo.provincia_id_provincia){
        this.auxDireccion = this.auxDireccion + ', ' + this.provincias[i].provincia_nombre;
      }
    }
    for(let i = 0; i < this.sucursales.length; i++){
      if(this.sucursales[i].id_direccion == activo.direccion_id_direccion){
        this.auxDireccion = this.auxDireccion + ', ' + this.sucursales[i].direccion_zona + ', ' + this.sucursales[i].direccion_calle;
      }
    }
    for(let i = 0; i < this.bloques.length; i++){
      if(this.bloques[i].id_bloque == activo.bloque_id_bloque){
        this.auxDireccion = this.auxDireccion + ', ' + this.bloques[i].bloque_nombre;
      }
    }
    for(let i = 0; i < this.aulas.length; i++){
      if(this.aulas[i].id_aula == activo.aula_id_aula){
        this.auxDireccion = this.auxDireccion + ', ' + this.aulas[i].aula_nombre;
      }
    }
    this.historiaAux1= [];

    for(let i = 0; i < this.historialList.length; i++){
      console.log("holaxd");
      if(activo.id_activo==this.historialList[i].activo_id_activo){
        console.log("si "+activo.id_activo+" soy "+this.historialList[i].activo_id_activo);
        this.historiaAux1.push(this.historialList[i]);
      }
    }

    setTimeout(() => {
      for (let i = 0; i < this.historiaAux1.length; i++) {
        const elemento = this.historiaAux1[i].activo_fecha;
        console.log("ya puej "+elemento);
        console.log("ya puej xd "+this.historiaAux1[i].activo_nombre);
      }
      }, 2000);
      this.custodio2aux= [];
      for(let i = 0; i < this.custodioList.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].custodio_id_custodio == this.custodioList[i].id_custodio){
            this.custodio2aux.push(this.custodioList[i].custodio_nombre) ;
          }
        }
      }
      setTimeout(() => {
        for (let i = 0; i < this.custodio2aux.length; i++) {
          const elemento = this.custodio2aux[i];
          console.log("ya puej "+elemento);
          console.log("ya puej xd "+this.custodio2aux[i]);
        }
        }, 2000);
      this.pais2aux= [];
      for(let i = 0; i < this.paises.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].pais_id_pais == this.paises[i].id){
            this.pais2aux.push(this.paises[i].pais_nombre) ;
          }
        }
      }
      this.departamento2aux= [];
      for(let i = 0; i < this.departamentos.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].departamento_id_departamento == this.departamentos[i].id_departamento){
            this.departamento2aux.push(this.departamentos[i].departamento_nombre) ;
          }
        }
      }
      this.provincia2aux= [];
      for(let i = 0; i < this.provincias.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].provincia_id_provincia == this.provincias[i].id_provincia){
            this.provincia2aux.push(this.provincias[i].provincia_nombre) ;
          }
        }
      }
      this.sucursal2aux= [];
      for(let i = 0; i < this.sucursales.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].direccion_id_direccion == this.sucursales[i].id_direccion){
            this.sucursal2aux.push(this.sucursales[i].direccion_zona + ', ' + this.sucursales[i].direccion_calle) ;
          }
        }
      }
      this.bloque2aux= [];
      for(let i = 0; i < this.bloques.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].bloque_id_bloque == this.bloques[i].id_bloque){
            this.bloque2aux.push(this.bloques[i].bloque_nombre) ;
          }
        }
      }
      this.aula2aux= [];
      for(let i = 0; i < this.aulas.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].aula_id_aula == this.aulas[i].id_aula){
            this.aula2aux.push(this.aulas[i].aula_nombre) ;
          }
        }
      }
      this.grupo2aux= [];
      for(let i = 0; i < this.grupoList.length; i++){
        for(let j = 0; j < this.historiaAux1.length; j++){
          if(this.historiaAux1[j].grupo_id_grupo == this.grupoList[i].id_grupo){
            this.grupo2aux.push(this.grupoList[i].grupo_nombre) ;
          }
        }
      }
      setTimeout(() => {
        this.myAngularxQrCode = "Nombre del activo: "+this.activoSeleccionado.activo_nombre.toString()+" Id activo: "+this.activoSeleccionado.id_activo.toString()+" Custodio: "+this.auxCustodio+" Direccion: "+this.auxDireccion;
        }, 2200);
  }
  estadosActivos: any[] = [
    { id: 1, nombre: 'Nuevo 6/6' },
    { id: 2, nombre: 'Como nuevo 5/6' },
    { id: 3, nombre: 'Usado en buen estado 4/6' },
    { id: 3, nombre: 'Usado 3/6' },
    { id: 3, nombre: 'Usado en mal estado 2/6' },
    { id: 3, nombre: 'Obsoleto 1/6' }
  ];
  selectedActivo?: number;
  activoSeleccionado: Activo = {id_activo: 0, activo_nombre: '', activo_fecha: new Date(), activo_categoria: 0, marca_id_marca: 0, activo_comprobante: '', pais_id_pais: 0, departamento_id_departamento: 0, provincia_id_provincia: 0, direccion_id_direccion: 0, bloque_id_bloque: 0, aula_id_aula: 0, activo_valor_inicial: 0, activo_valor_actual: 0, custodio_id_custodio: '', activo_detalle: '', activo_estado: '',activo_estado_uso: '', grupo_id_grupo: 0};

  //---------------------------------------
  displayedColumns: string[] = ['fecha', 'custodio', 'direccion', 'valor', 'usuario', 'estado de uso', 'grupo'];


  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
