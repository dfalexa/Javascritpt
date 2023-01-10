// CLASE 10. COERCIÓN

// Coerción: es la forma en la que podemos vambiar un tipo de valor a otro tipo de valor. Ejemplo:  
// Existen dos tipos de coerciones:

// 1. Coerciones implicitas: el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor, (de tipo número a string y viceversa)
4 + "7"; 
// R.N: 47 // COERCIÓN se está generando una concatenación de 4 y 7. 
4 * "7"; 
// R.N: 28 // COERCIÓN se está generando la multiplicación entre 4 y 7.

// 2. Coerciones explicitas: nosotros obligamos a que un valor de un tipo cambie a un valor de otro tipo, si necesitamos que ese valor sea de un tipo distinto. 



// En el navegador: 
// 1. Coerción implicita: 
var a = 4 + "7"; 
typeof a
// R.N: "String" // Lo hace porque la suma genera concatenación, más no operación en este caso. 
var b = 4 * "7"
typeof b
// R.N: "Number" // Lo hace porque hay un simbolo de operacion (ecuación impliicta) JS asume que queriamos operar y convierte el string 7 en número. 

// 2. Coerción explicita:
var a = 20; 
var b = a + "";
console.log(b)
// R.N: "20"
typeof b
// R.N: "string"  // La "b" es un string porque está concatenado con la a y un strin en ""

// * Convertir de número a string: ¿Cómo obligamos a que la "a" se convierta en un string sin que tengamos que concatenarlo
var c = String(a);
typeof c
// R.N: "string" // Se usa "string" para convertirla. 
console.log(c);
// R.N: "20"  // Sigue siendo el string o sea "a" dejo de ser número y se convirtió en string. 

// * Convertir de string a número: 
var d = Number(c);
typeof d
// R.N: "Number"
 console.log(d);
 // R.N: "20" 



 // Recomendaciones:
 // 1. En las páginas web, los datos de los usuarios me pueden llegar como strings, y a veces hay que convertirlos en número. 