import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { SuplementosComponent } from './pages/suplementos/suplementos.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductoComponent,
    SuplementosComponent,
    AccesoriosComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    SuplementosComponent,
    AccesoriosComponent,
    IndumentariaComponent
  ]
})
export class ProductoModule { }
