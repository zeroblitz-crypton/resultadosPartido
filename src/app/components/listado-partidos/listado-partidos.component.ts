import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';
import { PartidoServicesService } from 'src/app/services/partido-services.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.scss']
})
export class ListadoPartidosComponent implements OnInit {
  listadoPartidos:Partido[]=[]
  auxlistadoPartidos:Partido[]=[]
  searchText=""
  constructor(private partidosService:PartidoServicesService){

  }

  ngOnInit(): void {
    this.obtenerPartidos()
  }

  obtenerPartidos(){
    this.partidosService.getPartidos().subscribe(res=>{
      this.listadoPartidos=res
      this.auxlistadoPartidos=res
      console.log(this.auxlistadoPartidos);
      
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
  this.listadoPartidos = this.auxlistadoPartidos.filter(partido=>partido.nombrePartido.toLowerCase().includes(this.searchText.toLowerCase()))
  }
  limpiarCampo(){
    this.searchText=""
    this.obtenerPartidos()
  }

}
