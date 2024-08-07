import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos coleccion para los productos de la web del tipo producto
  private productosCollection: AngularFirestoreCollection<Productos>

  constructor(private database: AngularFirestore) {
    //referenciamos  coleccion productos y sera subida como "productos" a Firebase
    this.productosCollection = database.collection('producto');
  }

  //crear productos
  crearProducto(producto: Productos) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId()
        //Asiginamos ID creado al atributo idProducto de la interfaz "producto"
        producto.id = idProducto
        const resultado = await this.productosCollection.doc(idProducto).set(producto)
        resolve(resultado)
      } catch (error) {
        reject(error)  
      }
    })
  }

  obternerProducto(){
    //snapshotchange->toma una captura del estado de los datos
    //pipe -> funciona como una tuberia que retorna el nuevo arreglo de datos 
    //map -> "mapea" o recorre esa nueva informacion 
    //a-> resguarda la nueva informacion y la envia  
    return this.productosCollection.snapshotChanges().pipe(map(action=> action.map(a=>a.payload.doc.data())))
  }
}
