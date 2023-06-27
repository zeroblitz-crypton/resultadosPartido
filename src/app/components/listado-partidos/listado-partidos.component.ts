import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';
import { PartidoServicesService } from 'src/app/services/partido-services.service';
import { NgModule } from '@angular/core';
import { Celulares } from 'src/app/models/celulares';
import { CelularesService } from 'src/app/services/celulares.service';

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.scss']
})
export class ListadoPartidosComponent implements OnInit {
  listadoCelulares:Celulares[]=[]
  auxlistadoCelulares:Celulares[]=[]
  searchText=""
  constructor(private celularService:CelularesService){

  }

  ngOnInit(): void {
    this.obtenerPartidos()
  }

  obtenerPartidos(){
    this.celularService.getCelulares().subscribe(res=>{
      this.listadoCelulares=res
      this.auxlistadoCelulares=res
      console.log(this.auxlistadoCelulares);
      
    })
  }

  formatearCadena(dato:string){
    var datoString=dato.toLocaleLowerCase()
   var inicialMayuscula=datoString[0].toUpperCase()
   var resto=datoString.slice(1)

   return inicialMayuscula+resto
  }
  eliminarCelular(partido:any){
    this.celularService.eliminarCelulares(partido._id).subscribe(data=>{
      this.obtenerPartidos()
    })
    
  }
  searchPartido(){
  this.listadoCelulares = this.auxlistadoCelulares.filter(celular=>celular.nombreCelular.toLowerCase().includes(this.searchText.toLowerCase()) || celular.sizeRam.toLowerCase().includes(this.searchText.toLowerCase()) || celular.sizeBatery.toLowerCase().includes(this.searchText.toLowerCase()))
  }
  limpiarCampo(){
    this.searchText=""
    this.obtenerPartidos()
  }
  

}
