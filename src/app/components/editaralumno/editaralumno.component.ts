import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Celulares } from 'src/app/models/celulares';
import { CelularesService } from 'src/app/services/celulares.service';

@Component({
  selector: 'editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrls: ['./editaralumno.component.scss']
})
export class EditaralumnoComponent implements OnInit {
  celularesForm:FormGroup

  celular:any
  celularId:any
  constructor(
    private fb: FormBuilder,
    private celularService:CelularesService,
    private router:Router,
    private _route:ActivatedRoute
  ){

    this.celularId=this._route.snapshot.paramMap.get('id')
    

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

  ngOnInit(): void {
    this.obtenerCelular(this.celularId)
  }

  
  obtenerCelular(id:string){
    this.celularService.getCelular(id).subscribe(res=>{
      this.celularesForm.setValue({
        nombreCelular:res.nombreCelular, 
        camaraPosterior:res.camaraPosterior,
        camaraFrontal:res.camaraFrontal,
        sizePantalla:res.sizePantalla,
        sizeRam:res.sizeRam, 
        sizeStorage:res.sizeStorage,
        sizeBatery:res.sizeBatery,
        nombreProcesador:res.nombreProcesador,
        imagen:res.imagen

      })
      this.celular=res
      
      console.log(this.celular);
      
    })
  }

  registrarCelular(){
    this.celularService.eliminarCelulares(this.celularId).subscribe(data=>{
      
    })
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
    this.celularService.guardarCelulares(CELULAR).subscribe(data => {
     
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.celularesForm.reset();
    })
  }
}
