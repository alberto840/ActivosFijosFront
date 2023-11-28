export class User {
    id_usuario: number;
    usuario_nombre: string;
    usuario_pass: string;
    usuario_estado: string;
    usuario_correo: string;
    usuario_telefono: string;
    usuario_rol: string;
  
    constructor(
        id_usuario: number,
        usuario_nombre: string,
        usuario_pass: string,
        usuario_estado: string,
        usuario_correo: string,
        usuario_telefono: string,
        usuario_rol: string
    ) {
      this.id_usuario = id_usuario;
      this.usuario_nombre = usuario_nombre;
      this.usuario_pass = usuario_pass;
      this.usuario_estado = usuario_estado;
      this.usuario_correo = usuario_correo;
      this.usuario_telefono = usuario_telefono;
      this.usuario_rol = usuario_rol;
    }
  }