import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../clases/profesor';
import { ProfesorService } from '../../../services/profesores/profesor.service';
import { Route, Router } from '@angular/router';
 

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrl: './form-profesor.component.css'
})
export class FormProfesorComponent implements OnInit {

  profesor = new Profesor(0,'','','');
  constructor(private profesorServicio:ProfesorService, private router:Router){ 
  }

  ngOnInit(): void {
      
  }

  titulo = "Alta de Profesor";

  agregar(){
      console.log(this.profesor);
      this.profesorServicio.agregarProfesor(this.profesor).subscribe(resultado=>{
        if(resultado['insert']){
          this.router.navigate(['/profesor']);
        }
        else{
          alert('Ocurrio un error al insertar la información del cliente');
        }
      })
  }



}
