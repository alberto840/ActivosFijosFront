import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  constructor(private router: Router, public fb: FormBuilder, public usuarioService: UsuarioService) {}
  ngOnInit(): void {
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
  }

}
