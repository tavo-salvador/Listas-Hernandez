export class Materias{
    id: number;
    nombreMateria: string;
    nombreProfesor: string;
    calificacion: number;
    status: boolean;

    constructor(id: number, nombreMateria:string, nombreProfesor:string, calificacion:number,status: boolean ){
    this.id= id;
    this.nombreMateria = nombreMateria;
    this.nombreProfesor = nombreProfesor;
    this.calificacion = calificacion;
    this.status= status;
    }

    changeStatus(){
        this.status = !this.status;
    }

}