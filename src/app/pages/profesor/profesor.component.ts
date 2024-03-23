import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { ProfesorService } from '../../services/profesores/profesor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent implements OnInit{

  dtOptions: DataTables.Settings = {}
  data: any = [];
  dtTrigger: Subject<any> = new Subject<any>();

constructor(private httpClient:HttpClient, private profesorService:ProfesorService, private router:Router){}

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
      .get('http://localhost/angular/apiControlEscolarPHP/api/profesor.php')
      .subscribe((data)=>{
        this.data = data;
        this.dtTrigger.next(data);
      })
  }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }


  eliminar(id_profesor: number){
    console.log(id_profesor);
    this.profesorService.eliminarProfesor(id_profesor).subscribe(resultado=>{
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


