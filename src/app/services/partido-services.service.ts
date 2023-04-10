import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from '../models/Partido'
@Injectable({
  providedIn: 'root'
})
export class PartidoServicesService {
  uri='http://localhost:3000/partido/'
  constructor(private http:HttpClient) {
    
   }

   getPartidos(): Observable<any>{
      return this.http.get(this.uri)
   }
   eliminarPartido(id:string):Observable<any>{
    return this.http.delete(this.uri+id)
   }
   guardarPartido(partido:Partido):Observable<any>{
    return this.http.post(this.uri,partido)
   }

}
