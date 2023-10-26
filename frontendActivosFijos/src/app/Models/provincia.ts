export class Provincia {
  id_provincia: number;
  provincia_nombre: string;
  departamento_id_departamento: number;

  constructor(id_provincia: number, provincia_nombre: string, departamento_id_departamento: number) {
    this.id_provincia = id_provincia;
    this.provincia_nombre = provincia_nombre;
    this.departamento_id_departamento = departamento_id_departamento;
  }
}
