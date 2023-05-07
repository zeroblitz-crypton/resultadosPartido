export class FichaAlumno{
    _id?:number
    apellidos:string
    nombres:string
    sexo:string
    fechaNacimiento:string
    edad:number
    estadoCivil:string
    documentoIdentidad:string
    gradoInstruccion:string
    tipoEstudio:string
    institucionProcedencia:string
    lugarInstitucionProcedencia:string
    direccionRecidencia:string
    distritoRecidencia:string
    departamentoNacimiento:string
    provinciaNacimiento:string
    distritoNacimiento:string
    lugarNacimiento:string
    telefonoReferencia:string
    celular:string
    correo:string   
    ciclo:string
    especialidad:string
    modulo:string
    turno:string
    horario:string
    duracion:string

    constructor(
        apellidos:string,
    nombres:string,
    sexo:string,
    fechaNacimiento:string,
    edad:number,
    estadoCivil:string,
    documentoIdentidad:string,
    gradoInstruccion:string,
    tipoEstudio:string,
    institucionProcedencia:string,
    lugarInstitucionProcedencia:string,
    direccionRecidencia:string,
    distritoRecidencia:string,
    departamentoNacimiento:string,
    provinciaNacimiento:string,
    distritoNacimiento:string,
    lugarNacimiento:string,
    telefonoReferencia:string,
    celular:string,
    correo:string,    
    ciclo:string,
    especialidad:string,
    modulo:string,
    turno:string,
    horario:string,
    duracion:string
        ){
            this.apellidos=apellidos
            this.nombres=nombres
            this.sexo=sexo
            this.fechaNacimiento=fechaNacimiento
            this.edad=edad
            this.estadoCivil=estadoCivil
            this.documentoIdentidad=documentoIdentidad
            this.gradoInstruccion=gradoInstruccion
            this.tipoEstudio=tipoEstudio
            this.institucionProcedencia=institucionProcedencia
            this.lugarInstitucionProcedencia=lugarInstitucionProcedencia
            this.direccionRecidencia=direccionRecidencia
            this.distritoRecidencia=direccionRecidencia
            this.departamentoNacimiento=departamentoNacimiento
            this.provinciaNacimiento=provinciaNacimiento
            this.distritoNacimiento=distritoNacimiento
            this.lugarNacimiento=lugarNacimiento
            this.telefonoReferencia=telefonoReferencia
            this.celular=celular
            this.correo=correo
            this.ciclo=ciclo
            this.especialidad=especialidad
            this.modulo=modulo
            this.turno=turno
            this.horario=horario
            this.duracion=duracion
    }
}