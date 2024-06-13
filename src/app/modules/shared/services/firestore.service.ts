import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos una coleccion privada que referemcia a la interfaz usuario
  //va a ser una coleccion Firestore
  //respetará la estructura de datos de la interfaz usuarios
private usuariosCollection:AngularFirestoreCollection<Usuario>

  constructor(private database : AngularFirestore) { 
    this.usuariosCollection=this.database.collection<Usuario>('usuarios');
  }
}
