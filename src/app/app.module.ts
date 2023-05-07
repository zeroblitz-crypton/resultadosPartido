import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPartidosComponent } from './components/listado-partidos/listado-partidos.component';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component';
import { HttpClientModule } from '@angular/common/http';
import { RevisarAlumnoComponent } from './components/revisar-alumno/revisar-alumno.component';
import { EditaralumnoComponent } from './components/editaralumno/editaralumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPartidosComponent,
    CrearPartidoComponent,
    RevisarAlumnoComponent,
    EditaralumnoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
