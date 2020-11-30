import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { CVComponent } from './Components/cv/cv.component';
import { MisProyectosComponent } from './Components/mis-proyectos/mis-proyectos.component';

const routes: Routes = [
  {path: '', component: MisProyectosComponent},
  {path: 'cv', component: CVComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'misproyectos', component: MisProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
