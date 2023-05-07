import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FichaAlumno } from 'src/app/models/fichaAlumno';
import { PartidoServicesService } from 'src/app/services/partido-services.service';

@Component({
  selector: 'revisar-alumno',
  templateUrl: './revisar-alumno.component.html',
  styleUrls: ['./revisar-alumno.component.scss']
})
export class RevisarAlumnoComponent implements OnInit  {
  alummnoId:any
  alumno:any
  constructor(private partidosService:PartidoServicesService,private _route:ActivatedRoute){
  this.alummnoId=this._route.snapshot.paramMap.get('id')
  this.obtenerPartidos(this.alummnoId)
    
  }
  ngOnInit(): void {
    
  }
  
  obtenerPartidos(id:string){
    this.partidosService.getAlumno(id).subscribe(res=>{
      this.alumno=res
      
      console.log(this.alumno);
      
    })
  }
}
