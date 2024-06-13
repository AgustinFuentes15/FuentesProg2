import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//referenciar Auth de fireBase para inicializarla

  constructor(public auth:AngularFireAuth) { }
  //funcion para tomar UID

  //funcion para registro

  registrar(email:string, password:string){
    //validar el email y la contraseña
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  IniciarSesion(email:string, password :string){
  //validar el email y la contraseña
  return this.auth.signInWithEmailAndPassword(email,password);
  }

  //funcion para cerrar sesion 
  cerraSesion(){
    //devolver una promera vacia 
    return this.auth.signOut();
  }
}

