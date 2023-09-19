import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
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
    TablaGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
