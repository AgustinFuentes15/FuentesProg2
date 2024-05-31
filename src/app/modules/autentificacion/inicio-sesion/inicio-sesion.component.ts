import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
public colecciones:Usuario[]=[]






hide = true;
coleccion=
[
  {
  uid: 1,
  nombre: "agustin",
  apellido:"fuentes",
  email:"agusfue2@gmail.com",
  password:"123456",
  rol:"admin"
  },
  {
    uid: 2,
    nombre: "tomas",
    apellido:"lopez",
    email:"tomaslopez@gmail.com",
    password:"654321",
    rol:"usuario"
    }

]
console.log(this.coleccion)
}
loginMail: string = ""
  loginPassword: string = ""
buscar() {
  const usuarioEncontrado = this.coleccion.find((nombre) => nombre.email === this.loginMail && nombre.password)
  console.log(usuarioEncontrado)
  if (usuarioEncontrado) {
    alert('Bienvenido ' + usuarioEncontrado.nombre)
  } else {
    alert('Inicio de sesion fallido')
  }
}
  
}





