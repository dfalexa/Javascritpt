// CLASE 20. LOOPS: WHILE

// Generar un array y luego la función que hará esa tarea:

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){  // mientras la longitud del array (estudiantes) sea > 0, lo que está adentro de while va a pasar
    var estudiante = estudiantes.shift();  // sacar elementos del array
    saludarEstudiantes(estudiante);        // llamar la funcion con el parametro estudiante
}
//R.N: Hola, Maria
//R.N: Hola, Sergio
//R.N: Hola, Rosa
//R.N: Hola, Daniel

// Para ver todo lo que hace while, agregar console.log

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){ 
    console.log(estudiantes);
    var estudiante = estudiantes.shift();  
    saludarEstudiantes(estudiante);     
}
//R.N: (4) ["Maria", "Sergio", "Rosa", "Daniel"]
//R.N: Hola, Maria
//R.N: (3) ["Sergio", "Rosa", "Daniel"]
//R.N: Hola, Sergio
//R.N: (2) ["Rosa", "Daniel"]
//R.N: Hola, Rosa
//R.N: (1) ["Daniel"]
//R.N: Hola, Daniel

// El ciclo se rompe cuando estudiantes.lenght es igual a cero, es decir ya no es mayor a cero y por tanto no cumple la condición. 

