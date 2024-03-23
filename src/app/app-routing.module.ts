import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { FormProfesorComponent } from './components/profesor/form-profesor/form-profesor.component';
import { EditarProfesorComponent } from './components/profesor/editar-profesor/editar-profesor.component';
import { AltaMateriaComponent } from './components/materia/alta-materia/alta-materia.component';
import { EditarMateriaComponent } from './components/materia/editar-materia/editar-materia.component';
import { AltaAlumnoComponent } from './components/alumno/alta-alumno/alta-alumno.component';
import { EditarAlumnoComponent } from './components/alumno/editar-alumno/editar-alumno.component';

const routes: Routes = [
  {
    path:'profesor',
    component:ProfesorComponent
  },
  {
    path:'form-profesor',
    component:FormProfesorComponent
  },
  {
    path:'editar-profesor/:id',
    component:EditarProfesorComponent
  },
  {
    path:'materia',
    component:MateriaComponent
  },
  {
    path:'alta-materia',
    component:AltaMateriaComponent
  },
  {
    path:'editar-materia/:id',
    component:EditarMateriaComponent
  },
  {
    path:'alumno',
    component:AlumnoComponent
  },
  {
    path:'alta-alumno',
    component:AltaAlumnoComponent
  },
  {
    path:'editar-alumno/:id',
    component:EditarAlumnoComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
