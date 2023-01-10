// CLASE 23. OBJECTS: FUNCIÓN CONSTRUCTORA

// Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

// 1. Función constructora, hacer objetos de forma automatica y no manual:
function auto(marca, modelo, annio) {   // propiedades que tiene la función
    this.marca = marca;                 // tengo mi función que se llama auto, que va a tener como parametro las propuedades (marca, modelo, annio), luego, vamos a hacer el template ocupo la palabra this.marca = al parametro marca (el de arriba)
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);      // new genera una nueva instancia de nuestra función constructora y una nueva instancia es generar un objeto que deriva de otro objeto
autoNuevo
// RN: auto {marca: "Tesla", modelo: "Model 3", annio: 2020}

// 2. Generar nuevos objetos: 
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 =new auto("Toyota", "Corolla", 2020);
autoNuevo2
// RN: auto {marca: "Tesla", modelo: "Model X", annio: 2020}
autoNuevo2
// RN: auto {marca: "Toyota", modelo: "Corolla", annio: 2018}