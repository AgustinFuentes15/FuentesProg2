import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //crear coleccion de productos de tipo productos y lo definimos como un array 
  coleccionProductos: Productos[] = []

  //definimos formulario paro los productos 

  //atributos alfanumericos (string) se inicializan con comillas simples
  //atributos numericos (number) se inicializan con cero(0)
  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    imagen: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required)


  })
  constructor(public servicioCrud: CrudService) {}
  //subscribe notifica constantemente los cambios actuales del sistema 
  ngOnInit():void{
    this.servicioCrud.obternerProducto().subscribe(producto=>{
      //guarda la informacion recibida como un nuevo "producto" a la colección 
      this.coleccionProductos=producto
    })
  }
  async agregarProducto(){
    //validamos los valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto:Productos={
        //id no se toma porque es generado por la BD y no por el usuario
        id:'',
        //el resto es tomado con informacion ingresada por el usuario
        nombre:this.producto.value.nombre!,
        precio:this.producto.value.precio!,
        imagen:this.producto.value.imagen!,
        tipo:this.producto.value.tipo!


      }
      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto=>{
        alert("Ha agregado un nuevo producto con exito ")
      })
      .catch(error=>{
        alert("hubo un problema al agregar un nuevo producto")
      })
    }
  }

}
