// CLASE 22. OBJECTS

// Sintaxis de object:
var objeto = {};      // tengo una variable objeto 

// Ejemplo:
var miAuto = {         // variable objeto 
    marca: "Toyota",   //  propiedades: es una combinación entre palabras clave y valores
    modelo: "Corolla",
    annio: 2020           
};

miAuto
// RN: {marca: "Toyota", modelo: "Corolla", annio: 2020} 

miAuto.marca
// RN: "Toyota"

miAuto.annio
// RN: 2020

// Agregar metodos de objetos, propiedad que es una función:
var miAuto = {          
    marca: "Toyota",   
    modelo: "Corolla",
    annio: 2020, 
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);      // generar un string que tenga la concatenación de dos variables. This es una variable que hace referencia al objeto, hace referencia a su padre (miAuto). Eejemplo: this(miAuto).modelo
    }         
};

miAuto.detalleDelAuto();
// RN: Auto Corolla 2020
