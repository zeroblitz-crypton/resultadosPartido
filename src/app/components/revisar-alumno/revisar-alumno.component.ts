import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAlumno } from 'src/app/models/fichaAlumno';
import { CelularesService } from 'src/app/services/celulares.service';
import { PartidoServicesService } from 'src/app/services/partido-services.service';

@Component({
  selector: 'revisar-alumno',
  templateUrl: './revisar-alumno.component.html',
  styleUrls: ['./revisar-alumno.component.scss']
})
export class RevisarAlumnoComponent implements OnInit  {
  celularId:any
  celular:any
  constructor(private celularService:CelularesService,private _route:ActivatedRoute,
    private router:Router
    
    
    ){
  this.celularId=this._route.snapshot.paramMap.get('id')
  this.obternerCelular(this.celularId)
    
  }
  ngOnInit(): void {
    
  }
  
  obternerCelular(id:string){
    this.celularService.getCelular(id).subscribe(res=>{
      this.celular=res
      
      console.log(this.celular);
      
    })
  }
  eliminarCelular(){
    this.celularService.eliminarCelulares(this.celularId).subscribe(data=>{
      this.router.navigate(['/'])
    })
    
  }
  
}
