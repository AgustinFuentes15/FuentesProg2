import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//archivo de ruta del modulo
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//vistas del modulo autentificacion 
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';

// componentes
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//componentes de angular
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  //modulos locales se declaran y exportan
  exports:[
    RegistroComponent,
    InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
})
export class AutentificacionModule { }
