import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormProfesorComponent } from './components/profesor/form-profesor/form-profesor.component';
import { EditarProfesorComponent } from './components/profesor/editar-profesor/editar-profesor.component';
import { AltaMateriaComponent } from './components/materia/alta-materia/alta-materia.component';
import { EditarMateriaComponent } from './components/materia/editar-materia/editar-materia.component';
import { AltaAlumnoComponent } from './components/alumno/alta-alumno/alta-alumno.component';
import { EditarAlumnoComponent } from './components/alumno/editar-alumno/editar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ProfesorComponent,
    MateriaComponent,
    AlumnoComponent,
    FormProfesorComponent,
    EditarProfesorComponent,
    AltaMateriaComponent,
    EditarMateriaComponent,
    AltaAlumnoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
