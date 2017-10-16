class Persona{




    get nombreCompleto(){

    }

    set nombreCompleto(nombreCompletoNuevo){
        let palabras = nombreCompletoNuevo.toString().split('');
        this._nombre = palabras[0] || '';
            this._apellidos = palabras[1] || '';
    }

    constructor(nombre, apellidos){

        this._nombre = nombre;
        this._apellidos = apellidos;

    }
    mostrarnombre(){
        return `${this._nombre}${this._apellidos}`;
    }

}

let persona = new Persona("Alejandro ","Artiaga");
console.log(persona.mostrarnombre());
console.log(persona.nombreCompleto);


class Alumno extends Persona{

    constructor(nombre,apellidos,clase){

        super(nombre,apellidos);
        this.clase = clase;
    }

    irAClase(){
        console.log(`${this.nombreCompleto}: VOY A CLASE `)
    }



}

let alumno = new Alumno("Alejandro", "Artiaga", "3C")
console.log(alumno);

class alumnoPerdido extends Alumno{
    irAClase(){
        super.irAClase();
        console.log(`${this.nombreCompleto}: ESTOY PERDIDO`)
    }
}