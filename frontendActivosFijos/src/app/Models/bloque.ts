export class Bloque {
  id_bloque: number;
  bloque_nombre: string;
  direccion_id_direccion: number;

  constructor(
    id_bloque: number,
    bloque_nombre: string,
    direccion_id_direccion: number
  ) {
    this.id_bloque = id_bloque;
    this.bloque_nombre = bloque_nombre;
    this.direccion_id_direccion = direccion_id_direccion;
  }
}
