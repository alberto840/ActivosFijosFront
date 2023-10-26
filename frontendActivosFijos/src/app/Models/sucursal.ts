export class Sucursal {
    id_direccion: number;
    direccion_zona: string;
    direccion_calle: string;
    direccion_detalle: string;
    provincia_id_provincia: number;

    constructor(
      id_direccion: number,
      direccion_zona: string,
      direccion_calle: string,
      direccion_detalle: string,
      provincia_id_provincia: number
    ) {
      this.id_direccion = id_direccion;
      this.direccion_zona = direccion_zona;
      this.direccion_calle = direccion_calle;
      this.direccion_detalle = direccion_detalle;
      this.provincia_id_provincia = provincia_id_provincia;
    }
  }
