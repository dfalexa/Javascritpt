// CLASE 5. QUÉ SON LAS FUNCIONES EN JAVASCRIPT

// Las funciones son un conjunto de sentencias que podemos usar para generar ciertas acciones, con los valores que ya hemos guardado en las variables. Se usan para hacer ciertos pasos o calculos, validar, o generar. 
// Existen dos tipos de funciones:

// 1. Funciones declarativas:
// con la palabra reservada function, se está declarando que dentro de esto va a existir una función. Va a guardar valores. La funcion va a inicializar con la palabra miFuncion y va a guardar esos valores (return 3;)
function miFuncion() { 
    return 3;
}

miFuncion();  // Esto es para llamar a la función, como es función, siempre deben ir los parentesis. 

// 2. Funciones de expresión
// las funciones también pueden guardar otros tipos de valores, en este caso el valor va a ser una funcion. Estamos generando una variable que se llama miFuncion guardando una funcion (cuando le damos click se ve que hay una función dentro de esta variable) Se genera un return para que nos regrese un valor. A+ B es la suma de dos variables. 
var miFuncion = function(){ // aqui DECLARAMOS e INICIALIZAMOS una variable
    return a + b;
}

// Una función necesita parametros (en este caso son como a,b)
var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();  // Esto es para llamar a la función, como es función, siempre deben ir los parentesis. 

// 3. Función declarativa VS función de expresión:
// La diferencia es que en la función de expresión no le estoy colocando un nombre, sino que estoy creando una variable que tiene como valor una función, pero la fiunción no tiene nombre.
// La función declarativa si tiene un nombre, no es anonima. 

// 4. Ejemplos de funciones más complejas en el navegador: 
// console.log sirve para mostrar un mensaje en la consola web
function saludarEstudiantes(estudiante) {
    console.log(estudiante);  // sirve para imprimir ciertas cosas en la consola y lo podamos ver en tiempo real.
}
// undefined

saludarEstudiantes("Diego");  //aquí está llamando la función y además le esta dando un valor, el valor del parametro estudiante es Diego. 
//Diego

// Template string o plantilla de cadena de texto: sirve para poner variables en un string (string es un valor tipo cadena de texto con el que se puede imprimir texto)
// template string también sirve para mostrar el valor de varios objetos, por ejemplo si tenemos una BDD me mostrará todos los nombres de los estudiantes. 
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);  // Este signo `` es para poner un string e imprimir un "Hola Diego" porque el valor de estudiante es Diego. Además, utilizamos el comando con el signo $ para que me traiga todos los estudiantes, sin necesidad de hacerlo uno por uno. 
}

saludarEstudiantes("Diego")
// Hola Diego

// cuando no tenemos console.log se usa return:
function sumar(a,b) {  //genera una función que tiene por nombre suma, que va a recibir dos parametros (a y b) pero no sabemos que tipo de valor tienen aún.
    var resultado = a + b;  // dentro de la función se genera una variable de nombre resultado que va a ser igual a una operació de a+b, 
    return resultado // return es la palabra reservada para regresar información, le digo que me regrese el resultado de la variable resultado
}

sumar(1,2); // aquí es donde realmente le doy valores
// 3

// si no quiero generar la variable "resultado" adentro: es decir, no voy a guardar la variable y su resultado en la memoria
function sumar(a,b) {
    return a + b;
}
// 3