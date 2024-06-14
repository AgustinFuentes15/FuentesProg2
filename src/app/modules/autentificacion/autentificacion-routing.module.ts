import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importacion a las vistas del modulo autentificacion 
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';



const routes: Routes = [
  //carga común para rootear registro
  {
    path:"registro",component:RegistroComponent
  },

  //carga común parra rootear registro
{
  path:"inicio-sesion",component:InicioSesionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
