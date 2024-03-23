import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url = 'http://localhost/angular/apiControlEscolarPHP/api';
constructor(private http: HttpClient){}

  obtenerMaterias():Observable<any>{
    return this.http.get('http://localhost/angular/apiControlEscolarPHP/api/materia.php')
  }

  obtenerDondeMateria(id:number):Observable<any>{
    return this.http.get('http://localhost/angular/apiControlEscolarPHP/api/materia.php?id='+id)
  }

  eliminarMateria(id:number):Observable<any>{
    return this.http.delete('http://localhost/angular/apiControlEscolarPHP/api/materia.php?id='+id)
  }

  agregarMateria(Profesor:any):Observable<any>{
    return this.http.post('http://localhost/angular/apiControlEscolarPHP/api/materia.php',JSON.stringify(Profesor));
  }

  updateMateria(Profesor:any):Observable<any>{
    return this.http.put('http://localhost/angular/apiControlEscolarPHP/api/materia.php',JSON.stringify(Profesor));
  }

}
