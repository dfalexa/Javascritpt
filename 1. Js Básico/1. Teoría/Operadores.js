// CLASE 12. OPERADORES: ASIGNACIÓN, COMPARACIÓN Y ARITMÉTICOS

// 1. Operadores de operación / binarios: operaciones matemáticas. Se les conoce como binarios porque es un operador generando algo entres dos valores/variables.  
3 + 2
50 - 10
10 * 20
20 / 2
"Diego" + "De Granda"  // Este operador de + lo que hace con los strings es concatenar. 
// R.N: "Diego De Granda"
!false  // el caracter ! es una negación, con el caracter estamos negando que lo siguiente que pongamos es falso. 
// R.N: True 

// 2. Operadores de asignación

var a = 1; // operador de = que asigna valor. 

3 == "3"; // operador de == es para comparar.
// R.N: true

3 === "3"; // operador de === es para saber si son estrictamente iguales, por valor y tipo. 
// R.N: false

5 < 3; 
// R.N: false

5 <= 6; // menor o igual <=
// R.N: true

a && b // si a es verdad y b es verdad, se cumple la condición. Si alguno de los dos es falso, no se cumple.

a || b // si a es verdad o b es verdad, se cumple la condición. Aquí las dos no tiene que ser verdaderas, alguna puede ser falsa e igual se cumpliría la condición.

var edad = 40 // se usa ++ para incrementar un valor. 
edad++
edad
// R.N: 41

var edad = 40 // se usa ++ para incrementar un valor. 
edad++
edad += 2
// R.N: 43