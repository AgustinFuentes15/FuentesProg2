//Interfaz que se debe respetar para crear usuarios 
export interface Usuario {
    uid:string| any; //Atributos tipo any = reciben valores indefinidos 
    nombre: string;
    apellido:string;
    email:string;
    password: string;
    rol:string;
}
