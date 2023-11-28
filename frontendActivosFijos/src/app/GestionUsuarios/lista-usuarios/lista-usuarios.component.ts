import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/Usuarios/usuario.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
  usersForm!: FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'numero'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  disableSelect = new FormControl(false);
  registrosUsers!: any;
  constructor(private usersService: UsuarioService,private router: Router, public fb: FormBuilder, public usuarioService: UsuarioService) {}
  ngOnInit(): void {
    this.usersForm = this.fb.group({
      usuario_nombre : ['', Validators.required],
      usuario_pass : ['', Validators.required],
      usuario_estado : ['', Validators.required],
      usuario_correo : ['', Validators.required],
      usuario_telefono : ['', Validators.required],
      usuario_rol : ['', Validators.required],
    })
    this.usuarioService.getAllUsuarios().subscribe(
      response => {
        this.registrosUsers = response;

        // Manejar la respuesta de éxito aquí
        console.log('Registros de users mostradas', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el users', error);
      }
    )
    setTimeout(() => {    
      this.usersFiltrados = this.registrosUsers;
      }, 1000);
  }
  filtroBusqueda: string = '';
  usersFiltrados: any[] = this.registrosUsers;
  filtrarUsers() {
    this.usersFiltrados = this.registrosUsers.filter((user: any) =>
    user.usuario_nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
    user.id_usuario.toString().includes(this.filtroBusqueda)
    );
  }
  registrarUser(){
    this.usersService.registerNewUsuario(this.usersForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Marca user exitosamente', response);
        this.mostrarMensajeRegistroExito();
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear la user', error);
        this.mostrarMensajeRegistroError();
      }
      )
      setTimeout(() => {
          this.usersService.getAllUsuarios().subscribe(
            response => {
              this.registrosUsers = response;
      
              // Manejar la respuesta de éxito aquí
              console.log('Registros de marcas mostradas', response);
            },
            error => {
              // Manejar el error aquí
              console.error('Error al mostrar las marcas', error);
            }
          )
        }, 500);
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
