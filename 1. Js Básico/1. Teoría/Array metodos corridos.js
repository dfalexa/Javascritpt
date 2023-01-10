// CLASE 25. MÉTODOS DE RECORRIDOS DE ARRAYS

// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

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

// * Métodos para recorrer el array:

// 1. MÉTODO FILTER: 
// va a generar un nuevo array, pero no modifica el array general. El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

var articulosFiltrados = articulos.filter(function(articulo){ // nuevo var llamado articulosfiltrados que es igual a nuestro array principal articulos y poner el filter segudio del punto. Adiiconar una función, siempre, que tiene como parametro el articulo para que lo vaya filtrando. 
    return articulos.costo <= 500      // que me regrese el costo del articulo que sea igual o menos a 500 pesos.
});    

articulosFiltrados
//R.N: (2) [{...}, {...}]    // Dice que hay dos 
//R.N:  0: {nombre: "Libro", costo: 320}
//R.N:  1: {nombre: "Teclado", costo: 500}
//R.N:  length: 2
//R.N:  __proto__: Array (0)

// 2. MÉTODO MAP: 
// Ayuda a mapear ciertos articulos, donde va a generar un nuevo array sin modificar el original 
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre 
});

nombreArticulos
//R.N: ["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]

// 3. Método que veremos en la siguiente clase.  