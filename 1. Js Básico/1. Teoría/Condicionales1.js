// CLASE 14. CONDICIONALES: IF, ELSE, ELSE IF

// 1. ESTRUCTURA REAL DEL IF:

if (true) {   // entre () va la condicional que es real, siempre debe ser true está condición
    console.log("Hola");
}
// R.N: Hola

if (false) {   // entre () va la condicional que es real, siempre debe ser true está condición
    console.log("Hola");
}
// No hay respuesta del navegador, no va a hacer nada. 

// 2. ESTRUCTURA REAL DEL ELSE:
// Se usa cuando la condición es falsa, entonces hay que poner otra condición

if (false) {   
    console.log("Hola");
} else {
    console.log("Soy falso");
}
// R.N: Soy falso. 

// 3. ESTRUCTURA REAL DEL ELSE IF:
// Cuando las primeras condiciones son falsas

if (false) {   // si no es esto
    console.log("Hola");
} else if ("") {   // y tampoco es esto, entonces es:
    console.log("Soy falso");
} else {   // es else

}
// R.N: Soy falso. 

// Ejemplo:
var edad = 18;
if(edad === 18) {  // edad es estrictamente igual a 18
    console.log("Puedes votar, será tu primera votación");  // si es así, puede votar
} else if (edad > 18) {  // edad mayor a 18
    console.log("Puedes votar de nuevo"); // puede votar de nuevo
} else {  // si no es de 18 o mayor a 18, no podrá votar.
    console.log("Aun no puedes votar")
}
//R.N: Puedes votar, será tu primera votación.

var edad = 23;
if(edad === 18) {  // edad es estrictamente igual a 18
    console.log("Puedes votar, será tu primera votación");  // si es así, puede votar
} else if (edad > 18) {  // edad mayor a 18
    console.log("Puedes votar de nuevo"); // puede votar de nuevo
} else {  // si no es de 18 o mayor a 18, no podrá votar.
    console.log("Aun no puedes votar")
}
//R.N: Puedes votar de nuevo.

var edad = 18;
if(edad === 18) {  // edad es estrictamente igual a 18
    console.log("Puedes votar, será tu primera votación");  // si es así, puede votar
} else if (edad > 18) {  // edad mayor a 18
    console.log("Puedes votar de nuevo"); // puede votar de nuevo
} else {  // si no es de 18 o mayor a 18, no podrá votar.
    console.log("Aun no puedes votar")
}
//R.N: Aun no puedes votar.

// ¿Qué pasa cuando tenemos más condiciones?
// Se empieza a anidar el else if
var edad = 18;
if(edad === 18) {  
    console.log("Puedes votar, será tu primera votación");  
} else if (edad > 18) { 
    console.log("Puedes votar de nuevo"); 
} else if (edad > 18) {  
    console.log("Puedes votar de nuevo");
} else if (edad > 18) {  
    console.log("Puedes votar de nuevo");
} else {  
    console.log("Aun no puedes votar")
}


// 4. OPERADOR TERNARIO: 
// Es generar un if y un else en una sola línea

condition ? true : false;   // Signo de ? significa anulación de la logica, el true es lo que queremos validar, que en este caso será verdad, y sino : false.

// Pasos para entenderlo:
// 1. Generamos la condición (condition) que en el caso de arriba sería if(edad === 18)
// Si esa condición es verdad entonces pasa lo primero (true) y si no es verdad pasa lo segundo (false)

// Ejemplo:
var numero = 1;
var resultado = numero === 1 ? "Si soy uno" : "No soy uno"; // explicación: var resultado si el número (=) es estrictamente igual (===) a 1 entonces (?) "Si soy un uno" y en caso de que no sea un uno : vamos a guardar en esa variable "No soy uno"
console.log(resultado);
// R.N: "Si soy uno"

var numero = 2;
var resultado = numero === 1 ? "Si soy uno" : "No soy uno";
console.log(resultado);
// R.N: "No soy uno"

// 5. JUEGO DE PIEDRA, PAPEL O TIJERA

// Generar una función en la cual mande a llamar la función y le pase como parametro con lo que vaya a jugar (piedra, papel o tijera)
// Maquina VS Yo
// 1. Generar VAR
// 2. Generar Función y dentro de ella tiene que haber una validacipón, empezar por esta logica. Regresar el que gane o perdí. 
// 3. Al final se llama la función con el parametro. 