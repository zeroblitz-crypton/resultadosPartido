import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celulares } from '../models/celulares'
@Injectable({
  providedIn: 'root'
})



@Injectable({
  providedIn: 'root'
})
export class CelularesService {
  uri='http://localhost:3000/registroCelular/'
  constructor(private http:HttpClient) {
    
   }

   getCelulares(): Observable<any>{
      return this.http.get(this.uri)
   }
   eliminarCelulares(id:string):Observable<any>{
    return this.http.delete(this.uri+id)
   }
   guardarCelulares(celular:Celulares):Observable<any>{
    return this.http.post(this.uri,celular)
   }
   getCelular(id:String): Observable<any>{
    return this.http.get(this.uri+id)
 }

}
