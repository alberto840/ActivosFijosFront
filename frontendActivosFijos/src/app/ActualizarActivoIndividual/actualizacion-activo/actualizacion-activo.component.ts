import { Component, inject } from '@angular/core';
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
export class ActualizacionActivoComponent {
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
