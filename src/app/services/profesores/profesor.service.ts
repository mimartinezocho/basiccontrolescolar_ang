import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  url = 'http://localhost/angular/apiControlEscolarPHP/api';
constructor(private http: HttpClient){}

  obtenerProfesores():Observable<any>{
    return this.http.get('http://localhost/angular/apiControlEscolarPHP/api/profesor.php')
  }

  obtenerDondeProfesor(id:number):Observable<any>{
    return this.http.get('http://localhost/angular/apiControlEscolarPHP/api/profesor.php?id='+id)
  }

  eliminarProfesor(id:number):Observable<any>{
    return this.http.delete('http://localhost/angular/apiControlEscolarPHP/api/profesor.php?id='+id)
  }

  agregarProfesor(Profesor:any):Observable<any>{
    return this.http.post('http://localhost/angular/apiControlEscolarPHP/api/profesor.php',JSON.stringify(Profesor));
  }

  updateProfesore(Profesor:any):Observable<any>{
    return this.http.put('http://localhost/angular/apiControlEscolarPHP/api/profesor.php',JSON.stringify(Profesor));
  }

}
