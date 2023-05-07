import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FichaAlumno } from '../models/fichaAlumno'
@Injectable({
  providedIn: 'root'
})
export class PartidoServicesService {
  uri='http://localhost:3000/registroAlumno/'
  constructor(private http:HttpClient) {
    
   }

   getPartidos(): Observable<any>{
      return this.http.get(this.uri)
   }
   eliminarPartido(id:string):Observable<any>{
    return this.http.delete(this.uri+id)
   }
   guardarPartido(fiachaAlumno:FichaAlumno):Observable<any>{
    return this.http.post(this.uri,fiachaAlumno)
   }
   getAlumno(id:String): Observable<any>{
    return this.http.get(this.uri+id)
 }

}
