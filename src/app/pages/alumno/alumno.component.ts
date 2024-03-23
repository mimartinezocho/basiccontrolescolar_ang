import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AlumnoService } from '../../services/alumnos/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {

  dtOptions: DataTables.Settings = {}
  data: any = [];
  dtTrigger: Subject<any> = new Subject<any>();

constructor(private httpClient:HttpClient, private alumnoServicio:AlumnoService, private router:Router){}

  ngOnInit(): void {
    this.dtOptions = {
      /*
      ajax: "http://localhost/angular/apiControlEscolarPHP/api/profesor.php",
      columns:[
        {title: '*',   data: 'id'},
        {title: 'Nombre',   data: 'nombre'},
        {title: 'Telefono',   data: 'telefono'},
        {title: 'CorreoElectronico',   data: 'correoelectronico'},
        {title: 'FechaRegistro',   data: 'fecharegistro'}
      ],
      */
      language:{
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      }
    }

    this.httpClient
      .get('http://localhost/angular/apiControlEscolarPHP/api/alumno.php')
      .subscribe((data)=>{
        this.data = data;
        this.dtTrigger.next(data);
      })
  }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

  eliminar(id_alumno: number){
    console.log(id_alumno);
    this.alumnoServicio.eliminarAlumno(id_alumno).subscribe(resultado=>{
      if(resultado['delete']){
        this.router.navigate(['/profesor']); 
      }
      else
      {
        alert("ocurrio un error al eliminar el registro")
      }
    })
  }

}
