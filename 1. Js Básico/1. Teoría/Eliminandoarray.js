// CLASE 27. ELIMINANDO ELEMENTOS DE UN ARRAY

// 1. Método .push():
// Permite agregar uno o más elementos al final de un array:

let numArray = [1,2,3,4,5]    // array inicial
function newNum(){            // función
    numArray.push(6,7)        // con push agrego elementos
    console.log(numArray)     // reviso el array que ahora tiene los numeros agregados
}

newNum   // ejecutar función
//R.N: (7) [1, 2, 3, 4, 5, 6, 7]

// Ejemplo con strings:

letArray = ["Ana", "Juan", " Diego", "Lautaro"]  // array incial
function addCharacters(){                        // función
    txtArray.push("Chris", "Maria")              // push para agregar strings
    console.log(txtArray)                        // reviso el array que tiene strings agregados
}

addCharacters()
// R.N: ["Ana", "Juan", " Diego", "Lautaro", "Chris", "Maria"]

// 2. Método .shift():
// eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

let array = [1,2,3,4,5]     // crear array inicial
console.log(array)
let shiftArray = array.shift()  // aplicamos el .shift()
console.log(array)              // revisamos el array con el elemento eliminado

// R.N: (5) [1,2,3,4,5]
// R.N: (4) [2,3,4,5]           // eliminó elemento en el indice 0

// 3. Método .pop():
// Elimina el ultimo indice 

let arrayNuevo = [1,2,3,4,5]     // crear array inicial
console.log(arrayNuevo)
let shiftArrayNuevo = arrayNuevo.pop()  // aplicamos el .pop
console.log(arrayNuevo)              // revisamos el array con el elemento eliminado
// R.N: (5) [1,2,3,4,5]
// R.N: (4) [1,2,3,4,]           // eliminó elemento en el indice último


























// Notas finales:

// let:  let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.