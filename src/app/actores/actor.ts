//interfaz para la lectura de actores
export interface actorDTO{
    nombre:string;
    fechaNacimiento:Date;
    foto:string; //url de la foto
}

//interfaz para la creacion de actores
export interface actorCreacionDTO{
    nombre:string;
    fechaNacimiento:Date;
    foto:File;
}