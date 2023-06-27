import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Partido } from 'src/app/models/Partido';
import { Celulares } from 'src/app/models/celulares';
import { FichaAlumno } from 'src/app/models/fichaAlumno';
import { CelularesService } from 'src/app/services/celulares.service';
import { PartidoServicesService } from 'src/app/services/partido-services.service';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.scss']
})
export class CrearPartidoComponent {
celularesForm:FormGroup

constructor(
  private fb: FormBuilder,
  private celularService:CelularesService,
  private router:Router
){
  this.celularesForm=this.fb.group({
   

    nombreCelular:['', Validators.required], 
    camaraPosterior:['', Validators.required],
    camaraFrontal:['', Validators.required],
    sizePantalla:['', Validators.required],
    sizeRam:['', Validators.required], 
    sizeStorage:['', Validators.required],
    sizeBatery:['', Validators.required],
    nombreProcesador:['', Validators.required],
    imagen:['', Validators.required],
    
  
  })
}
formatearCadena(dato:string){
  var datoString=dato.toLocaleLowerCase()
 var inicialMayuscula=datoString[0].toUpperCase()
 var resto=datoString.slice(1)

 return inicialMayuscula+resto
}
registrarCelular(){
 const CELULAR:Celulares={
  nombreCelular:this.celularesForm.get('nombreCelular')?.value, 
  camaraPosterior:this.celularesForm.get('camaraPosterior')?.value,  
  camaraFrontal:this.celularesForm.get('camaraFrontal')?.value, 
  sizePantalla:this.celularesForm.get('sizePantalla')?.value, 
  sizeRam:this.celularesForm.get('sizeRam')?.value, 
  sizeStorage:this.celularesForm.get('sizeStorage')?.value, 
  sizeBatery:this.celularesForm.get('sizeBatery')?.value, 
  nombreProcesador:this.celularesForm.get('nombreProcesador')?.value,
  imagen:this.celularesForm.get('imagen')?.value, 
    }
    this.celularService.guardarCelulares(CELULAR).subscribe(data=>{
      this.router.navigate(['/'])
    })
}
 
}
