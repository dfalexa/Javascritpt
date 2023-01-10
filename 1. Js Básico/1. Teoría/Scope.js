// CLASE 8. SCOPE

// ¿Qué es scope? determina qué valor tendrá la variable dependiendo dónde se encuentre. Depende de donde decalre e inicialice una variable y si voy a tener acceso a la variable o no. 

//1. Scope Global y local

var nombre = "Diego"; // Scope global: donde se aloja todo, variables, validaciones, funciones.En mi scope global tengo la variable nombre que se llama Diego.
function fun(){ // scope local: se va a generar cuando inicializamos una funcion
    var apellido = "DeGranda"; // aquí estoy generando la variable interna apellido y su valor es "DeGranda". 
    return nombre + " " + apellido // le estoy pidiendo a la funcion que me regrese la var que está en global nombre (diego) y la var que está en local apellido (DeGranda)
}

fun(); // llama a la funcion y el resultado es Diego De Granda
// Diego De Granda

//observación: todo lo que esta en el scop global no puede acceder a lo que está en el scope local. 

// 2. Scop global no accede a scop local:

var nombre = "Diego";
function fun(){
    var apellido = "DeGranda"
    return nombre + " " + apellido // console.log si aparecería el apellido

}

console.log(apellido); //aquí llama a la var apellido, más no a la función como si lo hacía antes.
//apellido is not defined

//es importante el console.log, con esto si permite acceder. 


// Ejemplo en la consola del navegador:

//vamos a estar fuera de la función, en scope global:
var miNombre = "Diego";
function nombre (){
    var miApellido = "De Granda";
    console.log(miNombre + " " + miApellido); // concatenar las variables
}

nombre();  // estoy en scope global
//R.N: Diego de Granda

miNombre
//R.N: "Diego"

miApellido
// R.N: Uncaught referenceError: miApellido is not defined 

// Lo que quiere decir el anterior error es que no se ha declarado ni inicializado la variable miApellido en el Scope Global, solo existe en el scope local que etsá dentro de una función.
