import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Partido } from 'src/app/models/Partido';
import { PartidoServicesService } from 'src/app/services/partido-services.service';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.scss']
})
export class CrearPartidoComponent {
partidoForm:FormGroup

constructor(
  private fb: FormBuilder,
  private partidoService:PartidoServicesService,
  private router:Router
){
  this.partidoForm=this.fb.group({
    nombreLocal:['', Validators.required],
    nombreVisita:['', Validators.required],
    cuotaLocal:['', ],  
    cuotaVisita:['', ],
    cuotaEmpate:['', ],
    marcadorLocal:['', Validators.required],
    marcadorVisita:['', Validators.required]
  })
}
formatearCadena(dato:string){
  var datoString=dato.toLocaleLowerCase()
 var inicialMayuscula=datoString[0].toUpperCase()
 var resto=datoString.slice(1)

 return inicialMayuscula+resto
}
registrarPartido(){
  var nombreLocal= this.partidoForm.get('nombreLocal')?.value
  var nombreVisita= this.partidoForm.get('nombreVisita')?.value
  var auxnombrePartido= this.formatearCadena(nombreLocal.toLowerCase())+" vs "+ this.formatearCadena(nombreVisita.toLowerCase())
  const PARTIDO:Partido={
    nombrePartido:auxnombrePartido,
    cuotaLocal: this.partidoForm.get('cuotaLocal')?.value,
    cuotaVisita: this.partidoForm.get('cuotaVisita')?.value,
    cuotaEmpate: this.partidoForm.get('cuotaEmpate')?.value,
    marcadorLocal: this.partidoForm.get('marcadorLocal')?.value,
    marcadorVisita: this.partidoForm.get('marcadorVisita')?.value,
  }
  this.partidoService.guardarPartido(PARTIDO).subscribe(data=>{
    this.router.navigate(['/'])
  })
}



}
