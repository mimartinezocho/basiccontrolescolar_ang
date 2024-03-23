import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../clases/profesor';
import { ProfesorService } from '../../../services/profesores/profesor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrl: './editar-profesor.component.css'
})
export class EditarProfesorComponent implements OnInit{
  profesor = new Profesor(0,'','','');
  constructor(private profesorServicio:ProfesorService, private router:Router, private params:ActivatedRoute){ 
  }

  titulo = "Modificar Profesor";
  ngOnInit(): void {
      let id_profesor  = Number(this.params.snapshot.paramMap.get('id'));
      this.profesorServicio.obtenerDondeProfesor(id_profesor).subscribe(profesor=>this.profesor = profesor[0]);
  }

  modificar()
  {
    console.log(this.profesor)
    this.profesorServicio.updateProfesore(this.profesor).subscribe(resultado=>{
      if(resultado['update']){
        this.router.navigate(['/profesor']);
      }
      else{
        alert('Ocurrio un error al actualizar la información del cliente');
      }
    });

  }
 
}
