export class Departamento {
  id_departamento: number;
  departamento_nombre: string;
  pais_id_pais: number;

  constructor(id_departamento: number, departamento_nombre: string, pais_id_pais: number) {
    this.id_departamento = id_departamento;
    this.departamento_nombre = departamento_nombre;
    this.pais_id_pais = pais_id_pais;
  }
}
