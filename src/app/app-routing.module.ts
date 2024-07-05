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
 //carga perezosa para cargar modulo Inicio
  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  //carga perezosa para cargar el modulo Producto
  {
    path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },
  //carga perezosa para cargar el modulo Atentificacion
  {
    path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
