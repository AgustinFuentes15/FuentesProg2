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
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0 ,Validators.required),
    imagen: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required)


  })
  constructor(public servicioCrud: CrudService) {
  }

}
