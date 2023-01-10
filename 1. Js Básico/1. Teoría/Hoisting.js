// CALSE 9. HOISTING 

// Hoisting: es cuando las variables y las funciones se declaran antes que se procese cualquier tipo de codigo. Solo sirve para ECMAScript de 5 para abajo, para versiones más actuales no. Recomienda ir al curso de ECMAScript 6.

// EN VARIABLES:

// Forma 1:
var miNombre; // aquí solo declaramos una variable
miNombre = "Diego"; // inicializamos la variable 
// Forma 2:
var miNombre = "Diego"; // declaramos e inicializamos la var

// En hoisting, en el navegador: 
console.log(miNombre); // llama la variable
var miNombre = "Diego"; // luego inicializa y declara
// R.N: Undefined

// solo se puede hacer hoisting en funciones declarativas.

// ¿por qué toma el valor de undefined? porque lo toma asi: como arriba le estamos indicando el console.log, JS automaticamente piensa que tiene que guardar el var miNombre de alguna manera, y le da como valor el undefined 
var miNombre = undefined;
console.log(miNombre);
// R.N: Undefined

// para comprobar el undefined y cómo toma la var:
var miNombre = undefined // se supone esto está haciendo JS
console.log(miNombre)
miNombre = "Diego";
//R.N: undefined
//R.N: "Diego"

// ¿Cómo se sabe que undefined está cogiendo? prueba:
var miNombre = undefined
console.log(miNombre + "Soy ese hoisting"); // vamos a poner un string para ver que es este undefined
miNombre = "Diego";
//R.N: undefinedSoy ese hoisting 
//R.N: "Diego"

//lo anterior quier decir que en console.log esta jalando la variable que JS declaró por noostros y la inicializo con un valor de undefined, luego regresa Diego porque ya declaramos e inicializamos la variable. 

// EN FUNCIONES:

hey();  // estoy llamando la función 
function hey () { // inicializando la función
    console.log("Hola " + miNombre); // inicializando la funcion
}

var miNombre = "Diego"; // declarando e inicializando la var
//R.N: Hola undefined

// en lo anterior, las var y las funciones, se procesan antes de ejecutar cualquier codigo y ahí se genera el hoisting, pero las funciones se declaran antes que las variables:
// el programa coge la función (hey) y la lleva hasta arriba, declara la función y después va a declarar las variables. Declaro la var miNombre, luego la toma igual a undefined (porque no está inicializada, es decir no tiene un valor sino hasta después se le da "Diego") y continua con el código.

// Recomendaciones:
// 1. Declarar todas mis funciones, siempre al inicio del codigo.
// 2. No declara funciones en lineas después, porque el resultado va a ser undefined. 