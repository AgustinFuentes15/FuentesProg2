import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulo de ruteo
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//modulo que provee amgular el cual activa las aplicaciones en la aplicacion  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

//vinculaciones/ importaciones con firebase           
import { environment } from 'src/environments/environment';
import{AngularFireModule} from '@angular/fire/compat'; //ES para el cloud firestore
import{AngularFireAuthModule}from '@angular/fire/compat/auth'; //es para la autentificacion 
import {AngularFireStorageModule} from'@angular/fire/compat/storage'; //es para la bd archivos e imagenes 




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, 
    AngularFireStorageModule



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
