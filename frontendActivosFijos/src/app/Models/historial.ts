export class Historial {
    id_historial: number;    
    activo_id_activo: number; 
    activo_fecha_historial: Date;
    usuario_historial: number;
    valor_historial: number;
    activo_nombre: string;
    activo_fecha: Date;
    activo_categoria: number;
    marca_id_marca: number;
    activo_comprobante: string;
    pais_id_pais: number;
    departamento_id_departamento: number;
    provincia_id_provincia: number;
    direccion_id_direccion: number;
    bloque_id_bloque: number;
    aula_id_aula: number;
    activo_valor_inicial: number;
    activo_valor_actual: number;
    custodio_id_custodio: string;
    activo_detalle: string;
    activo_estado: string;
    activo_estado_uso: string;
    grupo_id_grupo: number;

    constructor(
        id_historial: number,    
        activo_id_activo: number, 
        activo_fecha_historial: Date,
        usuario_historial: number,
        valor_historial: number,
        activo_nombre: string,
        activo_fecha: Date,
        activo_categoria: number,
        marca_id_marca: number,
        activo_comprobante: string,
        pais_id_pais: number,
        departamento_id_departamento: number,
        provincia_id_provincia: number,
        direccion_id_direccion: number,
        bloque_id_bloque: number,
        aula_id_aula: number,
        activo_valor_inicial: number,
        activo_valor_actual: number,
        custodio_id_custodio: string,
        activo_detalle: string,
        activo_estado: string,
        activo_estado_uso: string,
        grupo_id_grupo: number
      ) {
        this.id_historial = id_historial;
        this.activo_id_activo = activo_id_activo;
        this.activo_fecha_historial = activo_fecha_historial;
        this.usuario_historial = usuario_historial;
        this.valor_historial = valor_historial;
        this.activo_nombre = activo_nombre; 
        this.activo_fecha = activo_fecha;
        this.activo_categoria = activo_categoria;
        this.marca_id_marca = marca_id_marca;
        this.activo_comprobante = activo_comprobante;
        this.pais_id_pais = pais_id_pais;
        this.departamento_id_departamento = departamento_id_departamento;
        this.provincia_id_provincia = provincia_id_provincia;
        this.direccion_id_direccion = direccion_id_direccion;
        this.bloque_id_bloque = bloque_id_bloque;
        this.aula_id_aula = aula_id_aula;
        this.activo_valor_inicial = activo_valor_inicial;
        this.activo_valor_actual = activo_valor_actual;
        this.custodio_id_custodio = custodio_id_custodio;
        this.activo_detalle = activo_detalle;
        this.activo_estado = activo_estado;
        this.grupo_id_grupo = grupo_id_grupo;
        this.activo_estado_uso = activo_estado_uso;
      }
  }
  