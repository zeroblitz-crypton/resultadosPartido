import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component';
import { ListadoPartidosComponent } from './components/listado-partidos/listado-partidos.component';

const routes: Routes = [
{path:'listado-partidos', component:ListadoPartidosComponent},
{path:'crear-partido', component:CrearPartidoComponent},
{ path: '',   redirectTo: '/listado-partidos', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
