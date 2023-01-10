// CLASE 15. SWITCH 

// Es una forma de validar y generar una condicion.  

// 1. Sintaxis de switch:
var numero = 1;  // vamos a validar una variable.

switch (numero) {  // validar si el valor de la var es caso 1
    case 1:        // si es caso 1 va a pasar al "Soy uno!" porque es verdad
        console.log("Soy uno!");
        break;     // el break no deja que pase a los siguientes casos, si el caso fue verdadero. 
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:       // se pone cuando ya no hay más casos por validar 
        console.log("No soy nada");
}

// Si no se pone el break, voy a tener la siguiente respuesta:
// Soy uno!
// Soy un 10!
// Soy un 100!
// No soy nada