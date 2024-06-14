//Interfaz que se debe respetar para crear objetos de los productos que voy a vender 
//la misma se exportará a los componentes necesarios 
export interface Productos {
    id:string;
    imagen:string;
    precio:number;
    nombre:string;
    tipo:string;
}
