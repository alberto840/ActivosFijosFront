import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';



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
export class ListaActivosAdminComponent {
  displayedColumns: string[] = ['select', 'nombre', 'modelo', 'idactivo', 'valor', 'categoria', 'custodio', 'direccion', 'datos', 'actualizar'];
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

  

}
