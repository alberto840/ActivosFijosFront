import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},

];

@Component({
  selector: 'app-lista-activos-admin',
  templateUrl: './lista-activos-admin.component.html',
  styleUrls: ['./lista-activos-admin.component.css'],
 
})
export class ListaActivosAdminComponent  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'categoria', 'custodio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
