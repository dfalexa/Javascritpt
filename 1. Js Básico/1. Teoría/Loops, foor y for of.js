// CLASE 19. LOOPS: CICLO REPETITIVO (FOR Y FOR... OF) 

// Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.
//Existen dos tipos de ciclos repetitivos:

// 1. For (para)
// 2. While (mientras)

// *** 1. EJERCICIO FOR - i: 
var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"]; 

// 1. Crear una tarea, tiene esta estructura:  
function saludarEstudiantes(estudiante){  // se va a ejecutar esta tarea.
    console.log(`Hola, ${estudiante}`);
}

// 2. Loop con for:
for(var i = 0; i < estudiantes.length; i++){  // genero una variable igual a cero, mientras i sea mejor a la longitud (cuantos elementos tiene) al array de estudiantes, e i va a aumentar dos más (++)
    saludarEstudiantes(estudiantes[i]);       // si la condicion se cumple, nos trae i desde el cero. 
}

// R.N: Hola, Maria
// R.N: Hola, Sergio
// R.N: Hola, Rosa
// R.N: Hola, Daniel

// Explicación: i++ hace que la i aumente cada vez que el ciclo se repite, así: 1,2,3,4, cuando llega al ciclo 4, ya no nos va a devolver resultado porque ya no se cumple la condicion "i < estudiantes.length"

// *** 2. EJERCICIO CON FOR - OF:
var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"]; 

// 1. Crear una tarea, tiene esta estructura:  
function saludarEstudiantes(estudiante){  // se va a ejecutar esta tarea.
    console.log(`Hola, ${estudiante}`);
}

// 2. Loop con while:
for(var estudiante of estudiantes){  // tenemos un array de estudiantes, y vamos a mandar a llamar a cada estudiante del array. Index es estudiante
    saludarEstudiantes(estudiante);
} 

// R.N: Hola, Maria
// R.N: Hola, Sergio
// R.N: Hola, Rosa
// R.N: Hola, Daniel

// Explicación: debemos inicializar una variable en singular (estudiante) de nuestra variable en plural (estudiantes), así se genera el bucle simepre que haya elementos. 

// *** 3. EJERCICIO CON WHILE:
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){              // mientras lo que este aquí sea verdad, lo que esta en la siguiente línea sea va a generar
    var estudiante = estudiantes.shift();   // shift va sacando los nombres en cada ciclo, hasta que se rompe
    saludarEstudiantes(estudiante);
}  

// R.N: Hola, Maria
// R.N: Hola, Sergio
// R.N: Hola, Rosa
// R.N: Hola, Daniel

// Explicación: mientras estudiantes.length sea > 0, se tiuebe que cumplir el ciclo de generar una var de estudiante = estudiantes.shift (que sacará elementos), y va a mandar a llamar a la función saludar estudiantes con la variable de estudiante como parametro. 

// Prueba de la explicación de shift con console.log:

while(estudiantes.length > 0){              
    console.log(estudiantes);
    var estudiante = estudiantes.shift();   
    saludarEstudiantes(estudiante);
}

// R.N: (4) ["Maria", "Sergio", "Rosa", "Daniel"]
// R.N: Hola, Maria 
// R.N: (3) ["Sergio", "Rosa", "Daniel"]
// R.N: Hola, Sergio
// R.N: (2) ["Rosa", "Daniel"]
// R.N: Hola, Rosa
// R.N: (1) ["Daniel"]
// R.N: Hola, Daniel

// IMPORTANTE: CUANDO LA LONGITUD NO ES MAYOR A CERO, 
//             SE ROMPE EL CICLO. 

// DESCRIPCIÓN FINAL:

// Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.
// Por ejemplo, si queremos que un usuario ingrese un valor mayor a 0, no sabremos cuántas veces se equivocará. También, si queremos que un programa se ejecute hasta que el usuario ingrese una opción para salir.

// 1. Cómo utilizar el ciclo while
// La estructura del ciclo while es la siguiente:
while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
// En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.

// 2. Generación de números con el bucle while
// Por ejemplo, generemos los números del 1 al 10, ahora con el bucle while.
// La estructura es la siguiente:
var numero = 1
while ( numero <= 10 ){
    console.log(numero)
    numero++
}
// Esto se leería como: “Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito”.
