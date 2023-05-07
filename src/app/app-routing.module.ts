import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component'
import { ListadoPartidosComponent } from './components/listado-partidos/listado-partidos.component';
import { RevisarAlumnoComponent } from './components/revisar-alumno/revisar-alumno.component';
import { EditaralumnoComponent } from './components/editaralumno/editaralumno.component';

const routes: Routes = [
{path:'listado-partidos', component:ListadoPartidosComponent},
{path:'crear-partido', component:CrearPartidoComponent},
{path:'revisar-alumno/:id', component:RevisarAlumnoComponent},
{path:'editaralumno/:id', component:EditaralumnoComponent},
{ path: '',   redirectTo: '/listado-partidos', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
