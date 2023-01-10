// CLASE 26. RECORRIENDO ARRAYS CON .FIND(), .FOREACH() Y .SOME()

// Para continuar con otros métodos para recorrer arrays, aprenderás find, forEach y some

// Array:
var articulos = [
    { nombre: "Bici", costo: 3000 },        // generar un objeto es entre llaves {}, para generar un nuevo objeto, va separado por una coma al finalizar la llave. 
    { nombre: "Tv", costo: 2055 },          // nuevo objeto 
    { nombre: "Libro", costo: 320 },        // nuevo objeto 
    { nombre: "Celular", costo: 10000 },    // nuevo objeto 
    { nombre: "Laptop", costo: 20000 },     // nuevo objeto 
    { nombre: "Teclado", costo: 500 },     // nuevo objeto 
    { nombre: "Audifonos", costo: 17000 },     // nuevo objeto 
];

// MÉTODOS:

// 1. Método find():
// Nos ayuda a encontrar algo dentro del array, y no modifica el array original sino crea un array nuevo
// El metodo de find evalua un true o false, si el articulo existe lo va a regresar, sino existe no lo regresará. Genera un nuevo array si es true. El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.
// El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo
// R.N: {noombre: "Laptop", costo: 20000}

//2. Método forEach():
// No va a generar un nuevo array, solo hará el filtrado sobre el array original sin modificarlo y va a regresar lo que le pidamos hacer. El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.
// Como no generamos un nuevo array, mandamos a llamar a "articulos":

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//R.N: 
// Bici
// Tv
// Libro
// Celular
// Laptop
// Teclado
// Audifonos

// 3. Método some():
// Nos regresa una validación de verdadero y falso y retorna los articulos que cumplen esa función. El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

var articulosBaratos = articulos.some(function(articulos){
    return articulo.costo <= 700;
});
articulosBaratos
// R.N: True. 

// RESUMEN:

// A modo de recopilación:

// find() : Devuelve el primer elemento del array que cumpla con la condición dada
// foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
// some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada
// Acá te dejo la documentación de cada uno: 

// find() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
// foreach() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// some() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// filter() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter