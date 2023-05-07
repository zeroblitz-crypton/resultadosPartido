import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';
import { PartidoServicesService } from 'src/app/services/partido-services.service';
import { NgModule } from '@angular/core';
import { FichaAlumno } from 'src/app/models/fichaAlumno';

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.scss']
})
export class ListadoPartidosComponent implements OnInit {
  listadoFichaAlumno:FichaAlumno[]=[]
  auxlistadoFichaAlumno:FichaAlumno[]=[]
  searchText=""
  constructor(private partidosService:PartidoServicesService){

  }

  ngOnInit(): void {
    this.obtenerPartidos()
  }

  obtenerPartidos(){
    this.partidosService.getPartidos().subscribe(res=>{
      this.listadoFichaAlumno=res
      this.auxlistadoFichaAlumno=res
      console.log(this.auxlistadoFichaAlumno);
      
    })
  }

  formatearCadena(dato:string){
    var datoString=dato.toLocaleLowerCase()
   var inicialMayuscula=datoString[0].toUpperCase()
   var resto=datoString.slice(1)

   return inicialMayuscula+resto
  }
  eliminarPartido(partido:any){
    this.partidosService.eliminarPartido(partido._id).subscribe(data=>{
      this.obtenerPartidos()
    })
    
  }
  searchPartido(){
  this.listadoFichaAlumno = this.auxlistadoFichaAlumno.filter(partido=>partido.nombres.toLowerCase().includes(this.searchText.toLowerCase()) || partido.apellidos.toLowerCase().includes(this.searchText.toLowerCase()) || partido.documentoIdentidad.toLowerCase().includes(this.searchText.toLowerCase()))
  }
  limpiarCampo(){
    this.searchText=""
    this.obtenerPartidos()
  }
  eliminarAlumno(alumno:any){
    this.partidosService.eliminarPartido(alumno._id).subscribe(data=>{
      this.obtenerPartidos()
    })
  }

}
