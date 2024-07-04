import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
//referenciar Auth de fireBase para inicializarla

  constructor(
    private auth:AngularFireAuth,
    private servicioFirestore:AngularFirestore
  ) { }
  //funcion para tomar UID
//funcion asincronica porque vamos a tener que usar internet
//siempre que uso funcion async la misma tiene que usar await 
//La promesa va a tener dos respuestas/ aceptada o rechazada
async obtenerUid(){
  //nos va a generar una promesa y la constante la va a capturar
  const user = await this.auth.currentUser

 
   
//Si el usuario no respeta la estructura de la interfaz/
//Si tuvo problemas para el resgistro =>el: mal internet
  if(user ==null){
    return null
  }else{
return user.uid
  }
}
/*
funcion que busca usurarios en la coleccion de usuarios cuyo correo electronico coincida con el valor proporcionado 
*/
obtenerUsuario(email:string){
  return this.servicioFirestore.collection('usuarios', ref=>ref.where('email','==',email)).get().toPromise()
}

  //funcion para registro

  registrar(email:string, password:string){
    //validar el email y la contraseña
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  iniciarSesion(email:string, password :string){
  //validar el email y la contraseña
  return this.auth.signInWithEmailAndPassword(email,password);
  }

  //funcion para cerrar sesion 
  cerraSesion(){
    //devolver una promera vacia 
    return this.auth.signOut();
  }
}

