import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
//ruta comun -> 1 solo componente
  {path:"",component:InicioComponent
},
//carga peresosa -> 1 solo componente
//loadChildren indica una ruta hija
//()=> ruta de donde vien el modulo 
// then es una funcion asincronica que espera uns configuracion del exterior y lo que hace es "este bien o mal nos va a devolver algo"
{path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
