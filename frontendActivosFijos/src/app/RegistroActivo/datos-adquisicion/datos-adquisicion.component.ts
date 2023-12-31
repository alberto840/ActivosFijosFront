import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
import { HistorialActivoService } from 'src/app/Services/HistorialActivo/historial-activo.service';
import { MarcasService } from 'src/app/Services/Marcas/marcas.service';
import { AulaService } from 'src/app/Services/UbicacionServices/Aula/aula.service';
import { BloqueService } from 'src/app/Services/UbicacionServices/Bloque/bloque.service';
import { DepartamentoService } from 'src/app/Services/UbicacionServices/Departamento/departamento.service';
import { PaisService } from 'src/app/Services/UbicacionServices/Pais/pais.service';
import { ProvinciaService } from 'src/app/Services/UbicacionServices/Provincia/provincia.service';
import { SucursalService } from 'src/app/Services/UbicacionServices/Sucursal/sucursal.service';

@Component({
  selector: 'app-datos-adquisicion',
  templateUrl: './datos-adquisicion.component.html',
  styleUrls: ['./datos-adquisicion.component.css']
})
export class DatosAdquisicionComponent implements OnInit {
  activoForm!: FormGroup;
  grupoActivoForm!: FormGroup;
  histrialActivoForm!: FormGroup;
  marcaForm!: FormGroup;
  marcasList!: Marca[];
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
  custodios!: any;
  custodiosAux1!: any;
  aulasAux1! : Aula[];
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
  selectedAula?: number;
  selectedAulaText?: string;
  selectedCustodio?: number;

  auxNombre?: string;
  auxIdActivo?: string;
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

  constructor(private router: Router, public fb: FormBuilder, public marcasService: MarcasService,public historialService: HistorialActivoService, public activoService: ActivoService, private paisService: PaisService,private departamentoService: DepartamentoService, private provinciaSerivce: ProvinciaService, private sucursalService: SucursalService, private bloqueService: BloqueService, private aulaService: AulaService, private custodioService: CustodioService, private grupoActivoService: GrupoActivoService) {}
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
    this.marcaForm = this.fb.group({
      marca_nombre : ['', Validators.required],
    })
    this.grupoActivoForm = this.fb.group({
      id_grupo : ['', Validators.required],
      grupo_nombre : ['', Validators.required],
    })
    this.getmarcas();
    this.getpais();
    this.getdepartamento();
    this.getprovincia();
    this.getsucursal();
    this.getbloque();
    this.getaula();
    this.getcustodios();
  }
  estadosActivos: any[] = [
    { id: 1, nombre: 'Nuevo 6/6' },
    { id: 2, nombre: 'Como nuevo 5/6' },
    { id: 3, nombre: 'Usado en buen estado 4/6' },
    { id: 3, nombre: 'Usado 3/6' },
    { id: 3, nombre: 'Usado en mal estado 2/6' },
    { id: 3, nombre: 'Obsoleto 1/6' }
  ];
  categoriasActivos: { id: number, nombre: string, tiempoVida: number, coeficienteAnual: number}[] = [
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
  getcustodios(){
    this.custodioService.getAllCustodios().subscribe(
      response => {
        this.custodios = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de custodios mostrados', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar custodios', error);
      }
    )
  }
  getmarcas(){
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
  registrarActivo(){
    this.activoForm.value.grupo_nombre = this.activoForm.value.activo_nombre;
    this.grupoActivoService.registerNewGrupo(this.activoForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Activo creado exitosamente', response);
        this.auxNombre = response.datos.id_grupo;
        console.log('holi', response.datos.id_grupo);
        this.mostrarMensajeRegistroExito();
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear Activo', error);
        this.mostrarMensajeRegistroError();
      }
      )

    setTimeout(() => {
      this.activoForm.value.grupo_id_grupo = this.auxNombre;
      this.activoForm.value.activo_valor_inicial = this.activoForm.value.activo_valor_actual;
      this.activoService.registerNewActivo(this.activoForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Activo creado exitosamente', response);
          this.auxIdActivo = response.datos.id_activo;
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear Activo', error);
          this.mostrarMensajeRegistroError();
        }
        )
      }, 2000);
      setTimeout(() => {
        this.histrialActivoForm.value.activo_id_activo = this.auxIdActivo;
        this.histrialActivoForm.value.activo_fecha_historial = Date.now();
        this.histrialActivoForm.value.usuario_historial = 1;
        this.histrialActivoForm.value.valor_historial = this.activoForm.value.activo_valor_inicial;
        this.histrialActivoForm.value.activo_nombre = this.activoForm.value.activo_nombre;
        this.histrialActivoForm.value.activo_fecha = this.activoForm.value.activo_fecha;
        this.histrialActivoForm.value.activo_categoria = this.activoForm.value.activo_categoria;
        this.histrialActivoForm.value.marca_id_marca = this.activoForm.value.marca_id_marca;
        this.histrialActivoForm.value.activo_comprobante = this.activoForm.value.activo_comprobante;
        this.histrialActivoForm.value.pais_id_pais = this.activoForm.value.pais_id_pais;
        this.histrialActivoForm.value.departamento_id_departamento = this.activoForm.value.departamento_id_departamento;
        this.histrialActivoForm.value.provincia_id_provincia = this.activoForm.value.provincia_id_provincia;
        this.histrialActivoForm.value.direccion_id_direccion = this.activoForm.value.direccion_id_direccion;
        this.histrialActivoForm.value.bloque_id_bloque = this.activoForm.value.bloque_id_bloque;
        this.histrialActivoForm.value.aula_id_aula = this.activoForm.value.aula_id_aula;
        this.histrialActivoForm.value.activo_valor_inicial = this.activoForm.value.activo_valor_inicial;
        this.histrialActivoForm.value.activo_valor_actual = this.activoForm.value.activo_valor_actual;
        this.histrialActivoForm.value.custodio_id_custodio = this.activoForm.value.custodio_id_custodio;
        this.histrialActivoForm.value.activo_detalle = this.activoForm.value.activo_detalle;
        this.histrialActivoForm.value.activo_estado = this.activoForm.value.activo_estado;
        this.histrialActivoForm.value.activo_estado_uso = this.activoForm.value.activo_estado_uso;
        this.histrialActivoForm.value.grupo_id_grupo = this.activoForm.value.grupo_id_grupo;
        this.historialService.registerNewGistorial(this.histrialActivoForm.value).subscribe(
          response => {
            // Manejar la respuesta de éxito aquí
            console.log('Registro creado exitosamente', response);
            this.mostrarMensajeRegistroExito();
          },
          error => {
            // Manejar el error aquí
            console.error('Error al crear registro', error);
            this.mostrarMensajeRegistroError();
          }
          )
        }, 4000);     
  }
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
}
