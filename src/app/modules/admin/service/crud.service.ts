import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


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
}
