import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAlumno } from 'src/app/models/fichaAlumno';
import { PartidoServicesService } from 'src/app/services/partido-services.service';

@Component({
  selector: 'editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrls: ['./editaralumno.component.scss']
})
export class EditaralumnoComponent implements OnInit {
  fichaAlumnnoForm:FormGroup
  alumno:any
  alummnoId:any
  constructor(
    private fb: FormBuilder,
    private partidoService:PartidoServicesService,
    private router:Router,
    private _route:ActivatedRoute
  ){

    this.alummnoId=this._route.snapshot.paramMap.get('id')
    

    this.fichaAlumnnoForm=this.fb.group({
     
      apellidos:['', Validators.required],
      nombres:['', Validators.required],
      sexo:['', Validators.required],
      fechaNacimiento:['', Validators.required],
      edad:['', Validators.required],
      estadoCivil:['', Validators.required],
      documentoIdentidad:['', Validators.required],
      gradoInstruccion:['', Validators.required],
      tipoEstudio:['', Validators.required],
      institucionProcedencia:['', Validators.required],
      lugarInstitucionProcedencia:['', Validators.required],
      direccionRecidencia:['', Validators.required],
      distritoRecidencia:['', Validators.required],
      departamentoNacimiento:['', Validators.required],
      provinciaNacimiento:['', Validators.required],
      distritoNacimiento:['', Validators.required],
      lugarNacimiento:['', Validators.required],
      telefonoReferencia:['', Validators.required],
      celular:['', Validators.required],
      correo:['', Validators.required],
      ciclo:['', Validators.required],
      especialidad:['', Validators.required],
      modulo:['', Validators.required],
      turno:['', Validators.required],
      horario:['', Validators.required],
      duracion:['', Validators.required],
  
    })
    
  }

  ngOnInit(): void {
    this.obtenerPartidos(this.alummnoId)
  }

  
  obtenerPartidos(id:string){
    this.partidoService.getAlumno(id).subscribe(res=>{
      this.fichaAlumnnoForm.setValue({
        apellidos:res.apellidos,
      nombres:res.nombres,
      sexo:res.sexo,
      fechaNacimiento:res.fechaNacimiento,
      edad:res.edad,
      estadoCivil:res.estadoCivil,
      documentoIdentidad:res.documentoIdentidad,
      gradoInstruccion:res.gradoInstruccion,
      tipoEstudio:res.tipoEstudio,
      institucionProcedencia:res.institucionProcedencia,
      lugarInstitucionProcedencia:res.lugarInstitucionProcedencia,
      direccionRecidencia:res.direccionRecidencia,
      distritoRecidencia:res.distritoRecidencia,
      departamentoNacimiento:res.departamentoNacimiento,
      provinciaNacimiento:res.provinciaNacimiento,
      distritoNacimiento:res.distritoNacimiento,
      lugarNacimiento:res.lugarNacimiento,
      telefonoReferencia:res.telefonoReferencia,
      celular:res.celular,
      correo:res.correo,
      ciclo:res.ciclo,
      especialidad:res.especialidad,
      modulo:res.modulo,
      turno:res.turno,
      horario:res.horario,
      duracion:res.duracion
      })
      this.alumno=res
      
      console.log(this.alumno);
      
    })
  }

  editaralumno(){
    this.partidoService.eliminarPartido(this.alummnoId).subscribe(data=>{
      
    })
    const ALUMNO:FichaAlumno={

      apellidos:this.fichaAlumnnoForm.get('apellidos')?.value,
      nombres:this.fichaAlumnnoForm.get('nombres')?.value,
      sexo:this.fichaAlumnnoForm.get('sexo')?.value,
      fechaNacimiento:this.fichaAlumnnoForm.get('fechaNacimiento')?.value,
      edad:this.fichaAlumnnoForm.get('edad')?.value,
      estadoCivil:this.fichaAlumnnoForm.get('estadoCivil')?.value,
      documentoIdentidad:this.fichaAlumnnoForm.get('documentoIdentidad')?.value,
      gradoInstruccion:this.fichaAlumnnoForm.get('gradoInstruccion')?.value,
      tipoEstudio:this.fichaAlumnnoForm.get('tipoEstudio')?.value,
      institucionProcedencia:this.fichaAlumnnoForm.get('institucionProcedencia')?.value,
      lugarInstitucionProcedencia:this.fichaAlumnnoForm.get('lugarInstitucionProcedencia')?.value,
      direccionRecidencia:this.fichaAlumnnoForm.get('direccionRecidencia')?.value,
      distritoRecidencia:this.fichaAlumnnoForm.get('distritoRecidencia')?.value,
      departamentoNacimiento:this.fichaAlumnnoForm.get('departamentoNacimiento')?.value,
      provinciaNacimiento:this.fichaAlumnnoForm.get('provinciaNacimiento')?.value,
      distritoNacimiento:this.fichaAlumnnoForm.get('distritoNacimiento')?.value,
      lugarNacimiento:this.fichaAlumnnoForm.get('lugarNacimiento')?.value,
      telefonoReferencia:this.fichaAlumnnoForm.get('telefonoReferencia')?.value,
      celular:this.fichaAlumnnoForm.get('celular')?.value,
      correo:this.fichaAlumnnoForm.get('correo')?.value,
      ciclo:this.fichaAlumnnoForm.get('ciclo')?.value,
      especialidad:this.fichaAlumnnoForm.get('especialidad')?.value,
      modulo:this.fichaAlumnnoForm.get('modulo')?.value,
      turno:this.fichaAlumnnoForm.get('turno')?.value,
      horario:this.fichaAlumnnoForm.get('horario')?.value,
      duracion:this.fichaAlumnnoForm.get('duracion')?.value,
  
  
     
    }
    this.partidoService.guardarPartido(ALUMNO).subscribe(data => {
     
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.fichaAlumnnoForm.reset();
    })
  }
}
