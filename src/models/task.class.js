// Está es una clase, va a tener nombre, descripción, nivel de urgencia, completada o no

import { LEVELS } from "./levels.enum";

// 1. Etablecer una lista de tareas y una tarea, es decir, un componente contenedor de las tareas, y luego tendremos un componente que es la tarea (o varias tareas).

export class Task {  // exportamos la clase Task (task es el nombre que le dimos a la clase)
    name = '';
    description = '';
    completed = false; // boleano, le pondremos que está vación con false.
    level = LEVELS.NORMAL; // importamos el nivel del js "levels.enum" y le ponemos un nivel normal

    constructor(name, description, completed, level){ // lo inicializamos con constructor y asignamos los objetos o valores con el "this"
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
        }
        
}


// Notas: 
// Para importar de manera automatica este comando: import { LEVELS } from "./levels.enum"; me voy a level = LEVELS (le doy ctrl+espacio) y así lo autoimporta. 
// Constructor: los constructores de React sólo se utilizan para dos propósitos: Para inicializar un estado local asignando un objeto al this. state . Para enlazar manejadores de eventos a una instancia