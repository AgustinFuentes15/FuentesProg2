import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //ruta comun -> 1 solo componente
  {
    path: "", component: InicioComponent
  },
  //carga peresosa -> 1 solo modulo
  //loadChildren indica una ruta hija
  //()=> ruta de donde vien el modulo 
  // then es una funcion asincronica/promesa que espera uns configuracion del exterior y lo que hace es "este bien o mal nos va a devolver algo"
  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },
  {
    path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
