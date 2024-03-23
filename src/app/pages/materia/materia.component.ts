import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MateriaService } from '../../services/materias/materia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.css'
})
export class MateriaComponent implements OnInit{

  dtOptions: DataTables.Settings = {}
  data: any = [];
  dtTrigger: Subject<any> = new Subject<any>();

constructor(private httpClient:HttpClient, private materiaServicio:MateriaService, private router:Router){}

  ngOnInit(): void {
    this.dtOptions = {
      language:{
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      }
    }

    this.httpClient
      .get('http://localhost/angular/apiControlEscolarPHP/api/materia.php')
      .subscribe((data)=>{
        this.data = data;
        this.dtTrigger.next(data);
      })
  }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

  eliminar(id_materia: number){
    console.log(id_materia);
    this.materiaServicio.eliminarMateria(id_materia).subscribe(resultado=>{
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
