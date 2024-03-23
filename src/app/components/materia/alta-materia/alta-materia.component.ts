import { Component, OnInit } from '@angular/core';
import { Materia } from '../../../clases/materia';
import { MateriaService} from '../../../services/materias/materia.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrl: './alta-materia.component.css'
})
export class AltaMateriaComponent implements OnInit{

  materia = new Materia(0,0,'','','');
  constructor(private materiaServicio:MateriaService, private router:Router){}
  ngOnInit(): void {
      
  }
  titulo = "Alta de materia";

  agregar(){
    console.log(this.materia);
      this.materiaServicio.agregarMateria(this.materia).subscribe(resultado=>{
        if(resultado['insert']){
          this.router.navigate(['/materia']);
        }
        else{
          alert('Ocurrio un error al insertar la información de la materia');
        }
      })
  }

}
