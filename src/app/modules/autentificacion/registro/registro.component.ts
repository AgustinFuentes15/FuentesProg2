import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//servicio de autentificacion 
import { AuthService } from '../services/auth.service';
//Seervicio de rutas que otorga Angular
import { Router } from '@angular/router';
//servicio de Firestore
import { FirestoreService } from '../../shared/services/firestore.service';

import * as CryptoJS from 'crypto-js';
//importamos paqueteria de SweetAlert para alertas personalizadas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

  //importacion del modelo/ interfaz

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  }

  //crear una coleccion para usuarios  que solo recibe objetos del tipo usuario 
  coleccionUsuarios: Usuario[] = []

  //referenciamos a nuestros servicios 
  constructor(
    public servicioAuth: AuthService,//meotodos de autentificacion
    public servicioRutas: Router,//metodo de navegacion
    public servicioFirestore: FirestoreService //vincula UID con la coleccion
  ) { }


  //funcion de registro
  async registro() {
    // const credenciales ={
    //   uid:this.usuarios.uid,
    //   nombre: this.usuarios.nombre,
    //   apellido:this.usuarios.apellido,
    //   email:this.usuarios.email,
    //   password: this.usuarios.password,
    //   rol:this.usuarios.rol,


    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    //constante respuesta = resguarda una respuesta
    const respuesta = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      //El metodo then nos devuelve la respuesta esperada por la promesa 
      .then(respuesta => {
        Swal.fire({
          title: "Buen trabajo",
          text: "se ha registrado con éxito!",
          icon: "success"
        });

        
        this.servicioRutas.navigate(['/inicio'])
        //accedemos al servicio de rutas-> metodo navigate
        //metodo NAVIGATE = permite dirigirnos a diferentes viste

      })
      //El metodo CATH toma una falla y le devuelve un error 
      .catch(error => {
        Swal.fire({
          title: "Ups!",
          text: "hubo un problema al registrar un nuevo usuario",
          icon: "error"
        });
        
   
      })

    //accede a servicio auth
    const uid = await this.servicioAuth.obtenerUid();
    //le envio el uid
    this.usuarios.uid = uid
    /*
     SHA es un algoritmo de hashing seguro que toma una entrada (en este caso la
     contraseña) y produce una cadena de caracteres HEXADEDIMAL que representa su HASH
    toString()convierte el resultado del hash en una cadena de caracteres legible
    */
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString()
    //guarda la info del usuario en la coleccion
    this.guardarUser()


    this.limpiarImputs()
  }


  //funcion para guarda un nuevo usuarios
  async guardarUser() {
    this.servicioFirestore.agregarUser(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios)
      })
      //encapsula el error
      .catch(err => {
        console.log('error=>', err)
      })
  }

  //enviamos los nuevos registros por medie del metodo push a la coleccion 
  // this.coleccionUsuarios.push(credenciales);


  //notificamos al usurio el correcto registro
  // alert("registrado correctamente")



  //   this.limpiarImputs()


  //funcion para vaciar form
  limpiarImputs() {
    const inputs = {
      uid: this.usuarios.uid = "",
      nombre: this.usuarios.nombre = "",
      apellido: this.usuarios.apellido = "",
      email: this.usuarios.email = "",
      password: this.usuarios.password = "",
      rol: this.usuarios.rol = ""
    }
  }

}








// clickEvent(event: MouseEvent) {
//   this.hide = !this.hide;
//   event.stopPropagation();
// }

