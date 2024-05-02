import { Component } from '@angular/core';
//importamos la interfaz
import { Productos } from 'src/app/models/productos';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
//propiedad publica (tipo array)
public info:Productos[]
constructor(){
  this.info=[
    {
      id:"",
      nombre:"Creatina en polvo ENA 300g",
      precio: 50000,
      imagen:"../../../../../assets/creatina-ena.jpg",
      tipo:"Suplemento"
    },
    {
      id:"",
      nombre:"Proteina en polvo Whey 924g",
      precio: 30000,
      imagen:"../../../../../assets/Proteina-Whey.webp",
      tipo:"Suplemento"
    },
    {
      id:"",
      nombre:"Preentreno psycotic gold 215g",
      precio: 30000,
      imagen:"../../../../../assets/Preentreno-psychoticgold.webp",
      tipo:"Suplemento"
    }
  ]
}
}
