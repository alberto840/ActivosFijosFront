import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectorDetalleGrupoComponent } from './lector-detalle-grupo/lector-detalle-grupo.component';
import { InicioUserLectorComponent } from './InicioUsers/inicio-user-lector/inicio-user-lector.component';
import { InicioUserActualizadorComponent } from './InicioUsers/inicio-user-actualizador/inicio-user-actualizador.component';
import { ActualizarListaActivosComponent } from './ActualizarActivoLista/actualizar-lista-activos/actualizar-lista-activos.component';
import { ActualizacionActivoComponent } from './ActualizarActivoIndividual/actualizacion-activo/actualizacion-activo.component';
import { DetalleActivoComponent } from './DetalleActivo/detalle-activo/detalle-activo.component';
import { DetalleGrupoActivoComponent } from './DetalleActivo/detalle-grupo-activo/detalle-grupo-activo.component';
import { RegistroLocalizacionComponent } from './RegistroDetallesActivo/registro-localizacion/registro-localizacion.component';
import { RegistroCustodioComponent } from './RegistroDetallesActivo/registro-custodio/registro-custodio.component';
import { RegistroMarcaComponent } from './RegistroDetallesActivo/registro-marca/registro-marca.component';
import { TransferenciaActivoComponent } from './TransferenciaActivo/transferencia-activo/transferencia-activo.component';
import { TablaResumenComponent } from './GestionUsuarios/tabla-resumen/tabla-resumen.component';
import { ListaUsuariosComponent } from './GestionUsuarios/lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './GestionUsuarios/agregar-usuario/agregar-usuario.component';
import { ActualizacionDatosSoftwareComponent } from './GestionUsuarios/actualizacion-datos-software/actualizacion-datos-software.component';
import { FooterComponent } from './Utilitarios/footer/footer.component';
import { MenuIzquierdoComponent } from './Utilitarios/menu-izquierdo/menu-izquierdo.component';
import { VentanaLoginComponent } from './Login/ventana-login/ventana-login.component';
import { TablaGeneralComponent } from './InicioUsuario/tabla-general/tabla-general.component';
import { ListaActivosAdminComponent } from './GestionUsuarios/lista-activos-admin/lista-activos-admin.component';
import { CommonModule } from '@angular/common';
import { DatosAdquisicionComponent } from './RegistroActivo/datos-adquisicion/datos-adquisicion.component';
import { LectorDetalleActivoComponent } from './DetalleActivo/lector-detalle-activo/lector-detalle-activo.component';
import { MenuIzquierdoEditorComponent } from './Utilitarios/menu-izquierdo-editor/menu-izquierdo-editor.component';
import { MenuIzquierdoLectorComponent } from './Utilitarios/menu-izquierdo-lector/menu-izquierdo-lector.component';

const routes: Routes = [
  //Login
  { path: '', redirectTo: '/login-component', pathMatch: 'full' },
  { path: 'login-component', component: VentanaLoginComponent },
  //menu
  { path: 'footer', component: FooterComponent },
  //GestionUsers
  { path: 'admin', component: MenuIzquierdoComponent,
    children:[
      { path: 'listaActivosAdmin', component: ListaActivosAdminComponent },
      { path: 'actualizarPagina', component: ActualizacionDatosSoftwareComponent },
      { path: 'listaUsuarios', component: ListaUsuariosComponent },
      { path: 'tablaResumenAdmin', component: TablaResumenComponent },
    ]
  },
  //Lector
  { path: 'lector', component: MenuIzquierdoLectorComponent,
    children:[

      { path: 'inicioLector', component: InicioUserLectorComponent },//FALTA
      { path: 'detalleGrupo', component: LectorDetalleGrupoComponent },
      { path: 'tablaGeneral', component: TablaGeneralComponent },
      { path: 'detalleActivo', component: LectorDetalleActivoComponent },
    ]
  },
  //Editor
  { path: 'editor', component: MenuIzquierdoEditorComponent,
    children:[
      //{ path: 'inicioEditor', component: InicioUserActualizadorComponent },//FALTA
      { path: 'registrarDatosAdquisicion', component: DatosAdquisicionComponent },
      { path: 'actualizarActivo', component: ActualizacionActivoComponent },
      { path: 'transferenciaActivo', component: TransferenciaActivoComponent },
      { path: 'registroMarca', component: RegistroMarcaComponent },
      { path: 'registroCustodio', component: RegistroCustodioComponent },
      { path: 'registroUbicacion', component: RegistroLocalizacionComponent },
      { path: 'grupoActivos', component: ActualizarListaActivosComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
