// CLASE 17. ARRAY

// Un array es una estructura de datos y tipo objeto que permite almacenar una serie de datos localizados por índices y separados por comas. V a aguardar más valores adentro, pueden guardar strings, numeros o incluso más array. 

// 1. Sintaxis general de un array [].
var frutas= [];   // accedemos al array a través del nombre de la variable, en este caso es "frutas"
 
// 2. Sintaxis del array con datos:
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);        // acceder al array 
console.log(frutas.length); // acceder a la longitud/ cuantos elementos tiene el array
console.log(frutas[0]);     // acceder a un objeto, en programación se empieza a contar desde el cero, le doy esto u otro numero para traer el elemento que quiera. 
var masFrutas = frutas.push("Uvas");  // agregar más elementos al final del arrey 
var ultimo = frutas.pop("Uvas");      // eliminar el último elemento en el array
var nuevaLongitud = frutas.unshift("Uvas"); // agregar nuevo valor al inicio del array
var borrarFruta = frutas.shift("Uvas");     // eliminar primer elemento
var borrarFruta = frutas.shift("Manzana")   // no se borra, ya que no estaba al inicio de la posicion. 
var porsicion = frutas.indexOf("Cereza")    // mutar un array - index trae la posiciona de un elemento (elemento 0,1,2,3 etc) 
frutas[2]; // traer el elemento 
