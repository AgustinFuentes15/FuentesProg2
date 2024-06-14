import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;
  //inicio local
  //creo un arreglo local llamado registro el cual va a importar mi interfaz usuario 
  public registrados: Usuario[] = []

  //creo mis usuarios a traves del constructor y los guardo en mi arreglo que contiene la interfaz usuario de manera localS
  // constructor() {
  //   this.registrados = [
  //     {
  //       uid: 1,
  //       nombre: "agustin",
  //       apellido: "fuentes",
  //       email: "agusfue2@gmail.com",
  //       password: "123456",
  //       rol: "admin"
  //     },
  //     {
  //       uid: 2,
  //       nombre: "tomas",
  //       apellido: "lopez",
  //       email: "tomaslopez@gmail.com",
  //       password: "654321",
  //       rol: "vis"
  //     }
  //   ]
  // }
  //fin local
  coleccionUsers:Usuario={
    uid: "",
    nombre: "",
     apellido: "",
     email: "",
     password: "",
     rol: ""
  }

constructor(
  public servicioAuth:AuthService,
  public sevicioFirestore:FirestoreService,
  public servicioRuta:Router 
  ){}

async iniciarSesion(){
  const credenciales={
    email: this.coleccionUsers.email,
    password: this.coleccionUsers.password
  }
  const respuesta= await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
  .then(respuesta =>{
alert("se ha logueado con exito")
this.servicioRuta.navigate(['/inicio'])



  })
  .catch(err => {
    alert("hubo un problema al iniciar sesión" + err)
    this.limpiarImputs()
  })
}
   limpiarImputs(){
   const inputs= {
    email: this.coleccionUsers.email="",
     password: this.coleccionUsers.password="",
 
    }





  //importamos interfaz de usurios e inicializamos vacio
//coleccionUser va a obtener los valores de mi ngModel
    
//creo dos variables que van a almacenar de manera local mi datos obtenidos de la vista a traves de coleccionUsers 

  // loginMail=this.coleccionUsers.email
  // loginPassword=this.coleccionUsers.password

  //creo la funcion buscar la cual funciona así
  //creamos una variable llamada usuarioEncontrado la cual va a almacenar los Usuarios 
  //encontrados y comparará los atributos mail y contraseña que se ingresaron desde la vista a traves de comparar las variables loginMail y loginPassword para ver si existe
  //en find envio usuarioEncontrado de manera completa y ahi comparo lo que necesite. Esto ya que no puedo acceder al objeto completo
  // buscar() {
  //   const usuarioEncontrado = this.registrados.find((usuarioEncontrado) => usuarioEncontrado.email === this.loginMail && usuarioEncontrado.password === this.loginPassword) 
  //   console.log(usuarioEncontrado)
  //   if (usuarioEncontrado) {
  //     alert('Bienvenido ' + usuarioEncontrado.nombre)
   
  //   } else {
  //     alert('Inicio de sesion fallido')
     
  //   }
  //    //como tarea terminar de limpiar los imputs
  // }



  // limpiarImputs(){
  //   const inputs= {
  //     uid:this.coleccionUsers.uid="",
  //     nombre: this.coleccionUsers.nombre="",
  //     apellido: this.coleccionUsers.apellido="",
  //     email: this.coleccionUsers.email="",
  //     password: this.coleccionUsers.password="",
  //     rol: this.coleccionUsers.rol=""
  //   }
}



}

