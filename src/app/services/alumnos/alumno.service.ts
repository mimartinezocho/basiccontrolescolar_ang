import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  url = 'http://localhost/angular/apiControlEscolarPHP/api';
constructor(private http: HttpClient){}

  obtenerAlumnos():Observable<any>{
    return this.http.get('http://localhost/angular/apiControlEscolarPHP/api/alumno.php')
  }

  obtenerDondeAlumno(id:number):Observable<any>{
    return this.http.get('http://localhost/angular/apiControlEscolarPHP/api/alumno.php?id='+id)
  }

  eliminarAlumno(id:number):Observable<any>{
    return this.http.delete('http://localhost/angular/apiControlEscolarPHP/api/alumno.php?id='+id)
  }

  agregarAlumno(Profesor:any):Observable<any>{
    return this.http.post('http://localhost/angular/apiControlEscolarPHP/api/alumno.php',JSON.stringify(Profesor));
  }

  updateAlumno(Profesor:any):Observable<any>{
    return this.http.put('http://localhost/angular/apiControlEscolarPHP/api/alumno.php',JSON.stringify(Profesor));
  }

}
