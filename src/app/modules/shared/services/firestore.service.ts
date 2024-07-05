import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos una coleccion privada que referencia a la interfaz usuario
  //va a ser una coleccion Firestore
  //respetará la estructura de datos de la interfaz usuarios
private usuariosCollection:AngularFirestoreCollection<Usuario>

  constructor(private database : AngularFirestore) { 
    this.usuariosCollection=this.database.collection<Usuario>('usuarios');
  }

  agregarUser(usuario:Usuario, id:string){
    // generamos nueva PROMESA y utiliza los metodos:
    // RESOLVE:promesa resuelta ->funciona correctamente
    // REJECT: promesa rechazada -> ocurrió una falla

    return new Promise(async(resolve,reject)=>{
      //BLOQUE TRY encapsula la logica resuelta
      try {
        // const resultado = coleccion de usuarios, envia como documento el UID
        // y setea la informacion que ingresamos en el registro
        usuario.uid = id 
        const resultado =await this.usuariosCollection.doc(id).set(usuario)
        resolve(resultado)
        

      }
      //bloque CATCH que encapsula una falla y la vuelve un error 
      catch(error){
        reject(error)
      }
    })
  }
}
