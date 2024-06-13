import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//servicio de autentificacion 
import { AuthService } from '../services/auth.service';
//Seervicio de rutas que otorga Angular
import { Router } from '@angular/router';


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
    public servicioAuth: AuthService,
    public servicioRutas: Router
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
        alert(" ha agregado un usuario con éxito")

        //accedemos al servicio de rutas-> metodo navigate
        //metodo NAVIGATE = permite dirigirnos a diferentes viste
        this.servicioRutas.navigate(['/inicio'])
      })
          //El metodo CATH toma una falla y le devuelve un error 
          .catch(error => {
            alert("hubo un problema al registrar un nuevo usuario")
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

