import { DepartamentoService } from './../../Services/UbicacionServices/Departamento/departamento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aula } from 'src/app/Models/aula';
import { Bloque } from 'src/app/Models/bloque';
import { Departamento } from 'src/app/Models/departamento';
import { Pais } from 'src/app/Models/pais';
import { Provincia } from 'src/app/Models/provincia';
import { Sucursal } from 'src/app/Models/sucursal';
import { AulaService } from 'src/app/Services/UbicacionServices/Aula/aula.service';
import { BloqueService } from 'src/app/Services/UbicacionServices/Bloque/bloque.service';
import { PaisService } from 'src/app/Services/UbicacionServices/Pais/pais.service';
import { ProvinciaService } from 'src/app/Services/UbicacionServices/Provincia/provincia.service';
import { SucursalService } from 'src/app/Services/UbicacionServices/Sucursal/sucursal.service';

@Component({
  selector: 'app-registro-localizacion',
  templateUrl: './registro-localizacion.component.html',
  styleUrls: ['./registro-localizacion.component.css']
})
export class RegistroLocalizacionComponent implements OnInit {
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

  opcionSeleccionada: number = 1;

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
  aux?: number;
  constructor(private router: Router, public fb: FormBuilder,private paisService: PaisService,private departamentoService: DepartamentoService, private provinciaSerivce: ProvinciaService, private sucursalService: SucursalService, private bloqueService: BloqueService, private aulaService: AulaService) { }

  ngOnInit() {
    this.paisForm = this.fb.group({
      id : ['', Validators.required],
      pais_nombre : ['', Validators.required],
    })
    this.departamentoForm = this.fb.group({
      id_departamento : ['', Validators.required],
      departamento_nombre : [this.aux, Validators.required],
      pais_id_pais : ['', Validators.required],
    })
    this.provinciaForm = this.fb.group({
      id_provincia : ['', Validators.required],
      provincia_nombre : ['', Validators.required],
      departamento_id_departamento : ['', Validators.required],
    })
    this.sucursalForm = this.fb.group({
      id_direccion : ['', Validators.required],
      direccion_zona : ['', Validators.required],
      direccion_calle : ['', Validators.required],
      direccion_detalle : ['', Validators.required],
      provincia_id_provincia : ['', Validators.required],
    })
    this.bloqueForm = this.fb.group({
      id_bloque : ['', Validators.required],
      bloque_nombre : ['', Validators.required],
      direccion_id_direccion : ['', Validators.required],
    })
    this.aulaForm = this.fb.group({
      id_aula : ['', Validators.required],
      aula_nombre : ['', Validators.required],
      bloque_id_bloque : ['', Validators.required],
    })
    this.getpais();
    this.getdepartamento();
    this.getprovincia();
    this.getsucursal();
    this.getbloque();
    this.getaula();
    console.log(this.selectedCountryText);

  }

  submitForm(){
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
  paisForm!: FormGroup;
  departamentoForm!: FormGroup;
  provinciaForm!: FormGroup;
  sucursalForm!: FormGroup;
  bloqueForm!: FormGroup;
  aulaForm!: FormGroup;

  postpais(){
    this.paisService.registerNewPais(this.paisForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Pais creada exitosamente', response);
        this.mostrarMensajeRegistroExito();
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear pais', error);
        this.mostrarMensajeRegistroError();
      }
    )
    setTimeout(() => {
        this.getpais();
      }, 2000);
  }
  postdepartamento(){
    if(this.selectedCountry!=null){
      this.departamentoForm.value.pais_id_pais = this.selectedCountry;
      this.departamentoService.registerNewDepartamento(this.departamentoForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Departamento creada exitosamente', response);
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear departamento', error);
          this.mostrarMensajeRegistroError();
        }
      )
      setTimeout(() => {
        this.getdepartamento();
      }, 2000);
    }else{
      this.mostrarMensajeElegirError();
    }
  }
  postprovincia(){
    if(this.selectedDepartment!=null){
      this.provinciaForm.value.departamento_id_departamento = this.selectedDepartment;
      this.provinciaSerivce.registerNewProvincia(this.provinciaForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Provincia creada exitosamente', response);
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear pais', error);
          this.mostrarMensajeRegistroError();
        }
      )
      setTimeout(() => {
        this.getprovincia();
      }, 2000);
    }else{
      this.mostrarMensajeElegirError();
    }
  }
  postsucursal(){
    if(this.selectedProvincia!=null){
      this.sucursalForm.value.provincia_id_provincia = this.selectedProvincia;
      this.sucursalService.registerNewSucursal(this.sucursalForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Sucursal creada exitosamente', response);
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear sucursal', error);
          this.mostrarMensajeRegistroError();
        }
      )
      setTimeout(() => {
        this.getsucursal();
      }, 2000);
    }else{
      this.mostrarMensajeElegirError();
    }

  }
  postbloque(){
    if(this.selectedSucursal!=null){
      this.bloqueForm.value.direccion_id_direccion = this.selectedSucursal;
      this.bloqueService.registerNewBloque(this.bloqueForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Bloque creada exitosamente', response);
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear bloque', error);
          this.mostrarMensajeRegistroError();
        }
      )
      setTimeout(() => {
        this.getbloque();
      }, 2000);
    }else{
      this.mostrarMensajeElegirError();
    }
  }
  postaula(){
    if(this.selectedBloque!=null){
      this.aulaForm.value.bloque_id_bloque = this.selectedBloque;
      this.aulaService.registerNewAula(this.aulaForm.value).subscribe(
        response => {
          // Manejar la respuesta de éxito aquí
          console.log('Aula creada exitosamente', response);
          this.mostrarMensajeRegistroExito();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al crear aula', error);
          this.mostrarMensajeRegistroError();
        }
      )
      setTimeout(() => {
        this.getaula();
      }, 2000);
    }else{
      this.mostrarMensajeElegirError();
    }
  }

  mostrarAlerta = false;
  mostrarAlertaError = false;
  mostrarAlertaErrorElegir = false;
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
  mostrarMensajeElegirError() {
    this.mostrarAlertaErrorElegir = true;
    setTimeout(() => {
      this.cerrarAlerta();
    }, 3000);
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
    this.mostrarAlertaError = false;
    this.mostrarAlertaErrorElegir = false;
  }

}
