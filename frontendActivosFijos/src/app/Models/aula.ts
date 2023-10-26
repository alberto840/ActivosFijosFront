export class Aula {
  id_aula: number;
  aula_nombre: string;
  bloque_id_bloque: number;

  constructor(
    id_aula: number,
    aula_nombre: string,
    bloque_id_bloque: number
  ) {
    this.id_aula = id_aula;
    this.aula_nombre = aula_nombre;
    this.bloque_id_bloque = bloque_id_bloque;
  }
}
