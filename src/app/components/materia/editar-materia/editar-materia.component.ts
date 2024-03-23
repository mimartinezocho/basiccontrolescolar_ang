import { Component, OnInit } from '@angular/core';
import { Materia } from '../../../clases/materia';
import { MateriaService } from '../../../services/materias/materia.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrl: './editar-materia.component.css'
})
export class EditarMateriaComponent implements OnInit {
  materia = new Materia(0,0,'','','');
  constructor(private materiaServicio:MateriaService, private router:Router, private params:ActivatedRoute){}
  titulo = "Modificar Materia";
ngOnInit(): void {

  let id_materia  = Number(this.params.snapshot.paramMap.get('id'));
      this.materiaServicio.obtenerDondeMateria(id_materia).subscribe(materia=>this.materia = materia[0]);
}

modificar()
  {
    console.log(this.materia)
    this.materiaServicio.updateMateria(this.materia).subscribe(resultado=>{
      if(resultado['update']){
        this.router.navigate(['/profesor']);
      }
      else{
        alert('Ocurrio un error al actualizar la información del cliente');
      }
    });

  }

}
