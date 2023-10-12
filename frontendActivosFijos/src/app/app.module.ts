import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaActivosAdminComponent } from './GestionUsuarios/lista-activos-admin/lista-activos-admin.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LectorDetalleGrupoComponent } from './lector-detalle-grupo/lector-detalle-grupo.component';
import { InicioUserLectorComponent } from './InicioUsers/inicio-user-lector/inicio-user-lector.component';
import { InicioUserActualizadorComponent } from './InicioUsers/inicio-user-actualizador/inicio-user-actualizador.component';
import { MenuIzquierdoEditorComponent } from './Utilitarios/menu-izquierdo-editor/menu-izquierdo-editor.component';
import { MenuIzquierdoLectorComponent } from './Utilitarios/menu-izquierdo-lector/menu-izquierdo-lector.component';
import { LectorDetalleActivoComponent } from './DetalleActivo/lector-detalle-activo/lector-detalle-activo.component';

@NgModule({
  declarations: [
    InicioUserActualizadorComponent,
    MenuIzquierdoEditorComponent,
    MenuIzquierdoLectorComponent,
    InicioUserLectorComponent,
    LectorDetalleGrupoComponent,
    AppComponent,
    ActualizarListaActivosComponent,
    ActualizacionActivoComponent,
    DetalleActivoComponent,
    DetalleGrupoActivoComponent,
    RegistroLocalizacionComponent,
    RegistroCustodioComponent,
    RegistroMarcaComponent,
    TransferenciaActivoComponent,
    TablaResumenComponent,
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    ActualizacionDatosSoftwareComponent,
    FooterComponent,
    MenuIzquierdoComponent,
    VentanaLoginComponent,
    TablaGeneralComponent,
    ListaActivosAdminComponent,
    LectorDetalleActivoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
