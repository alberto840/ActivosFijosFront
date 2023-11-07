import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Activo } from 'src/app/Models/activo';
import { Aula } from 'src/app/Models/aula';
import { Bloque } from 'src/app/Models/bloque';
import { Departamento } from 'src/app/Models/departamento';
import { Grupo } from 'src/app/Models/grupo';
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

@Component({
  selector: 'app-lector-detalle-grupo',
  templateUrl: './lector-detalle-grupo.component.html',
  styleUrls: ['./lector-detalle-grupo.component.css']
})
export class LectorDetalleGrupoComponent {


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

  activosGrupo!: Activo[];
  numeroActivos: number=0;


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
    for(let i = 0; i < this.activosGrupo.length; i++){
      this.activoForm.value.grupo_id_grupo = this.activosGrupo[i].grupo_id_grupo;
      this.activoForm.value.id_activo = this.activosGrupo[i].id_activo;
      this.activoForm.value.activo_nombre = this.activosGrupo[i].activo_nombre;
      this.activoForm.value.activo_fecha = this.activosGrupo[i].activo_fecha;
      this.activoForm.value.activo_categoria = this.activosGrupo[i].activo_categoria;
      this.activoForm.value.marca_id_marca = this.activosGrupo[i].marca_id_marca;
      this.activoForm.value.activo_comprobante = this.activosGrupo[i].activo_comprobante;
      this.activoForm.value.activo_estado = this.activosGrupo[i].activo_estado;
      this.activoForm.value.activo_valor_inicial = this.activosGrupo[i].activo_valor_inicial;
      this.activoForm.value.activo_valor_actual = this.activosGrupo[i].activo_valor_actual;
      this.activoForm.value.activo_detalle = this.activosGrupo[i].activo_detalle;
        this.activoService.registerNewActivo(this.activoForm.value).subscribe(
          response => {
            // Manejar la respuesta de éxito aquí
            console.log('Activo creado exitosamente numero: '+i, response);
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
                }, 2000);
              },
              error => {
                // Manejar el error aquí
                console.error('Error al crear Historial', error, "el historial: ", this.histrialActivoForm.value);
                this.mostrarMensajeRegistroError();
              }
              )
            }, 2000);
    }
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
  gruposFiltrados: Grupo[] = [];
  filtrarActivos() {
    this.gruposFiltrados = this.grupoList.filter((grupo: Grupo) =>
      grupo.grupo_nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
      grupo.id_grupo.toString().includes(this.filtroBusqueda)
    );
  }
  seleccionarActivo(grupo: Grupo) {
    this.numeroActivos = 0;
    console.log('Activo seleccionado: ', grupo.id_grupo);
    this.grupoSeleccionado = grupo;
    this.activosGrupo = [];
    for(let i = 0; i < this.activosList.length; i++){
      if(this.activosList[i].grupo_id_grupo==this.grupoSeleccionado.id_grupo){
        this.activosGrupo.push(this.activosList[i]);
        this.numeroActivos++;
      }
    }
    this.custodio2aux = [];
    for(let i = 0; i < this.custodioList.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.custodioList[i].id_custodio==this.activosGrupo[j].custodio_id_custodio){
          this.custodio2aux[j] = this.custodioList[i].custodio_nombre;
        }
      }
    }
    this.pais2aux = [];
    for(let i = 0; i < this.paises.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.paises[i].id==this.activosGrupo[j].pais_id_pais){
          this.pais2aux[j] = this.paises[i].pais_nombre;
        }
      }
    }
    this.departamento2aux = [];
    for(let i = 0; i < this.departamentos.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.departamentos[i].id_departamento==this.activosGrupo[j].departamento_id_departamento){
          this.departamento2aux[j] = this.departamentos[i].departamento_nombre;
        }
      }
    }
    this.provincia2aux = [];
    for(let i = 0; i < this.provincias.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.provincias[i].id_provincia==this.activosGrupo[j].provincia_id_provincia){
          this.provincia2aux[j] = this.provincias[i].provincia_nombre;
        }
      }
    }
    this.sucursal2aux = [];
    for(let i = 0; i < this.sucursales.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.sucursales[i].id_direccion==this.activosGrupo[j].direccion_id_direccion){
          this.sucursal2aux[j] = this.sucursales[i].direccion_zona+", "+this.sucursales[i].direccion_calle;
        }
      }
    }
    this.bloque2aux = [];
    for(let i = 0; i < this.bloques.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.bloques[i].id_bloque==this.activosGrupo[j].bloque_id_bloque){
          this.bloque2aux[j] = this.bloques[i].bloque_nombre;
        }
      }
    }
    this.aula2aux = [];
    for(let i = 0; i < this.aulas.length; i++){
      for(let j = 0; j < this.activosGrupo.length; j++){
        if(this.aulas[i].id_aula==this.activosGrupo[j].aula_id_aula){
          this.aula2aux[j] = this.aulas[i].aula_nombre;
        }
      }
    }

    setTimeout(() => {
      this.myAngularxQrCode = "Nombre del grupo: "+this.grupoSeleccionado.grupo_nombre.toString()+" Id grupo: "+this.grupoSeleccionado.id_grupo.toString();
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
  grupoSeleccionado: Grupo = {id_grupo: 0, grupo_nombre: ''};
  //---------------------------------------
  displayedColumns: string[] = ['id activo','nombre', 'custodio', 'direccion', 'valor', 'estado de uso'];


  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
