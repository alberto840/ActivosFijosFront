import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


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

  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Nuevo', sound: 'Woof!'},
    {name: 'Medio uso', sound: 'Meow!'},
    {name: 'Pasado de uso', sound: 'Moo!'},
    {name: 'Desuso', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  displayedColumns: string[] = ['fecha', 'custodio', 'direccion', 'valor', 'estado'];
  dataSource = ELEMENT_DATA;
}
