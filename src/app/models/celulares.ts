export class Celulares{
    _id?:number;
    nombreCelular:string;
    camaraPosterior:string;  
    camaraFrontal:string;
    sizePantalla:string;
    sizeRam:string;
    sizeStorage:string;
    sizeBatery:string;
    nombreProcesador:string;
    imagen:string

    constructor(nombreCelular:string,
        camaraPosterior:string,  
        camaraFrontal:string,
        sizePantalla:string,
        sizeRam:string,
        sizeStorage:string,
        sizeBatery:string,
        nombreProcesador:string,
        imagen:string
        ){

            this.nombreCelular=nombreCelular,
            this.camaraPosterior=camaraPosterior,  
            this.camaraFrontal=camaraFrontal,
            this.sizePantalla=sizePantalla,
            this.sizeRam=sizeRam,
            this.sizeStorage=sizeStorage,
            this.sizeBatery=sizeBatery,
            this.nombreProcesador=nombreProcesador,
            this.imagen=imagen

    }
}