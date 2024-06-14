import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  //carga común para el inicio la cual siempre va a iniciar cuando inicie mi app
  {
    path:"",component:InicioComponent
  },

  //carga comun para rootear inicio
  {
    path:"inicio",component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
