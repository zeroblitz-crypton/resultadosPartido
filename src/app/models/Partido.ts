export class Partido{
    _id?:number
    nombrePartido:string;
    cuotaLocal:number;  
    cuotaVisita:number;
    cuotaEmpate:number;
    marcadorLocal:number;
    marcadorVisita:number;

    constructor(nombrePartido:string,cuotaLocal:number,cuotaVisita:number,cuotaEmpate:number,marcadorLocal:number,marcadorVisita:number){
        this.nombrePartido=nombrePartido
        this.cuotaLocal=cuotaLocal;  
        this.cuotaVisita=cuotaVisita;
        this.cuotaEmpate=cuotaEmpate;
        this.marcadorLocal=marcadorLocal;
        this.marcadorVisita=marcadorVisita;
    }
}