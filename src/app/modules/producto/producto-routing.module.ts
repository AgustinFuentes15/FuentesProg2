import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//Importaciones de las vistas del modulo producto 
import { ProductoComponent } from './pages/producto/producto.component';
import { SuplementosComponent } from './pages/suplementos/suplementos.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

const routes: Routes = [

{
  path:"productos",component:ProductoComponent
},
{
  path:"suplementos",component:SuplementosComponent
},
{
  path:"accesorios",component:AccesoriosComponent
},
{
  path:"indumentaria",component:IndumentariaComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductoRoutingModule { }
