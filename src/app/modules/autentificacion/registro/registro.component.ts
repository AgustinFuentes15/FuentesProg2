import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

 //importacion del modelo/ interfaz

 usuarios:Usuario={
  uid:'',
    nombre: '',
    apellido:'',
    email:'',
    password: '',
    rol:'',
 }

 //crear una coleccion para usuarios  que solo recibe objetos del tipo usuario 
 coleccionUsuarios:Usuario[] =[]
 //funcion de registro
 registro(){
  const credenciales ={
    uid:this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido:this.usuarios.apellido,
    email:this.usuarios.email,
    password: this.usuarios.password,
    rol:this.usuarios.rol,
  }

//enviamos los nuevos registros por medie del metodo push a la coleccion 
this.coleccionUsuarios.push(credenciales);


  console.log(credenciales);
  console.log(this.coleccionUsuarios);
 }











  // clickEvent(event: MouseEvent) {
  //   this.hide = !this.hide;
  //   event.stopPropagation();
  // }
}
