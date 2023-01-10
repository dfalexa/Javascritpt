// Lo primero que se hace es declarar las variables, establecer que variables de HTML voy usar en JS

const fecha = document.querySelector('#fecha') // creo una constante llamada fecha, y le voy a indicar que lea el HTML que va a estar identificada por un ID o una clase
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST // antes de poner esto, habia colocado const id = 0, esto no se puede, una constante jamás puede ser cero, se cambia por let. ID siempre va a estar cambiando de valor si el usuario guarda informacion

let id // para guardar data o información, creamos un array (formacion, arreglo) list siempre va a estar cambiando de valor si el usuario guarda informacion


// Creación de fecha que se actualice automaticamente: 

const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', {weekday: 'long', month: 'short', day: 'numeric'}) // inner HTML es para ir al HTML donde esta la fecha, JS lo toma y lo cambia. 

// 1. FUNCION AGREGAR TAREA
// El paso 1 era comenzar solo con el parametro tarea, luego agregabamos el botonEnter y el document.Addeventlistener, todos primero tambien con el parametro tarea.
// El paso 2 es poner los demás parametros como id, realizado y eliminado en la funcion agregarTarea, luego, tambien los vamos coloando en las demás funciones como botonEnter y documentaddeventlistener.


function agregarTarea (tarea, id, realizado, eliminado) {   // función agregar tarea que tiene como parametro tarea, que corresponde a lo que coloquemos en el recuadri
    
    if(eliminado) {return}  // si el usuario elimina la tarea, se ejecuta como si eliminado fuese true, y si es true entonces abro llaves y le pongo return, para que así nada del codigo de const elemento se ejecute. 

    const REALIZADO = realizado ? check : uncheck // JS si lee mayusculas, es diferente el realiazdo en min a este. Va a usar los operadores ternarios: si realizado es true (?) marcha check (y check tiene su valor arriba) sino esta realizado poner : uncheck
    const LINE = realizado ? lineThrough :''  // si realizado es true entonces activa linethrough y si es false, pon una cadena vacio. Cuando esta el estado de check realizado esta subrayado. 

    const elemento = `  
                        <li id="elemento" >
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i> 
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                        </li>
                    `
    lista.insertAdjacentHTML("beforeend", elemento) // tengo que llamar a lista, que esta haciendo referencia al ul, o al elemento en concreto, y le aplico el metodo insertAdjancentHTML (es para insertar el nuevo HTML desde JS en un lugar en concretor en el HTML) para este caso tendra el parametro "beforeend" que significa antes del final, o sea antes de </ul> o antes del final. Luego de la coma, va lo que queremos insertar en este caso es la variable elmento (que vale todo lo que ya pusimos arriba del HTML)
}


// Función de tarea realizada:

function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough) // la propiedad ParentNode para identificar los elementos hijo, si activo esto, le estoy diciendo que se vaya al elemento padre de ese hijo (el hijo es el "element" que estoy colocando). Entonces, le digo del element (hijo), ve al elemento padre (que es li) e identifica un queryselector que coincida con .text (el unico que esta es el class LINE) y luego agrega la clase lineThrough
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true
}

// Funcion de tarea eliminada:

function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode) // como vamos a eliminar, empezamos por el elemento parentNode del hijo (class) que sería li (padre), y luego volvemos al elemento padre de nuevo de li (hijo) que seria ul (padre), una vez situado en el elemento padre ul vamos a darle remover al hijo, que sería li
    LIST[element.id].eliminado = true 
    console.log(LIST)
}

botonEnter.addEventListener('click', ()=> {     // Para que funcione lo anterior, llamar a la funcion agregar tarea. Para darle secuencia, creamos un boton para poder llamar esa tarea. Se hace addeventlistener y cuando el usuario haga click le vamos a pasar una funcion arraw para que la ejecute (que es la siguiente)
    const tarea = input.value //crear la constante que se va a llamar tarea, que será igual al valor que va a tener ese input.value (con esto puedo saber que valor tiene ese input en ese momento y se lo asigno a la const tarea)
    if(tarea){  //condicional
        // Cada vez que el usuario haga click en agregar tarea, va a mandar a llamar la funcion agregar tarea para pasarle el paramero de tarea (que ya lo tengo como input.value), va a pasar el parametro de id (que si es la primera tarea va a vale 0 (esto esta arriba declarado en const id = 0)), va a pasar el parametro false y false. 
        agregarTarea(tarea, id, false, false)    //si if tarea existe, ejecuta agregarTarea y manda el valor tarea en esta función
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
    localStorage.setItem('TODO',JSON.stringify(LIST)) // explicacion abajo, basicamente es para almacenar y guardar información, mientras se pasa todo a texto con JSON y viceversa con stringify para que se entiendan entre lenguajes. Esta informacion la extraemos del elemento lista para guardarla. 
    id++ // despues de borrar el texto en el placeholder va a sumar un numero al id (que estaba en cero inicialmente, ahora va a valer 1, despues con una nueva tarea vale 2, etc) 
    input.value = '' // va a ser vacio porque evidentemente va a tener una tarea, y va a pasar esa tarea del usuario a otra zona, y lo que colocó en el boton se tiene que borrar. 
    }
    
})

document.addEventListener('keyup', function (event) {   // para que cuando el usuario llene el recuadro, de enter y este guarde la tarea. El Keyup es para cuando el usuario haga la acción de soltar el teclado, y luego incluir la funcion event del evento que está haciendo el usuario
    if(event.key=='Enter'){ // si el enter se va a colocar, un event key es similar a enter, entonces realiza algo. Estamos llamando la funcion evento que esta analizando todo el documento, y la funcion event.key tiene entre sus parametros una palabra llamada enter, eventkey lee cualquiera de las teclas del teclado, pero solo con enter va a hacer todo lo que le pidamos
        const tarea = input.value
        if(tarea){
            agregarTarea(tarea, id, false, false) 
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
        localStorage.setItem('TODO', JSON.stringify(LIST))
        
        input.value=''
        id++
        console.log(LIST)
        }
        
    }

}) 

lista.addEventListener('click', function(event){
    const element = event.target // element es igual al evento target 
    const elementData = element.attributes.data.value // ya que el eventtarget se ejecuta entonces voy a ponerle el elemento atributo, que ve a través del NamedNopMap si el evento es realizaod o eliminado
    console.log(elementData)
    
    if(elementData === 'realizado') {
        tareaRealizada(element) // si el evento es realizado, ejecuta la funcion tarea realizada
    }
    else if (elementData == 'eliminado') {
        tareaEliminada(element) // si el evento es eliminado, ejecuta la funcion tarea eliminada
        console.log("eliminado")
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
    //console.log(element)
    //console.group(element.attributes) // esta viendo el NamedNopMap (que tiene el class, data y id)
    //console.log(element.attributes.data) // esta viendo el atributo data del NamedNopMap
    //console.log(element.attributes.data.value) // esta buscando el valor de la data que encontró en el atributo de elemento 
}) // para poder escuchar el evento del usuario cuando completa o elimina la tare

// Local storage get item
// Hay un formato JSON en el local storage, lo que hace cuando se inicia el navegador es traer la informacion y lo renderiza para traer las tareas que teniamos guardadas 

let data = localStorage.getItem('TODO') // va a tener el valor localStorage y va a traer el archivo TODO 
if(data){ // formato condicional si existe data y tiene alguna información data
    LIST = JSON.parse(data) // convertir la info de formato JSON a formato del lenguaje actual
    console.log(LIST)
    id = LIST.length
    cargarLista(LIST)
} else { // si no tengo ninguna informacion, aparece la lista vacia  
    LIST = []
    id = 0
}

function cargarLista(array) {
    array.forEach(function(item){ // es usado para recorrer cada uno de los elementos y mandarlos a llamar, le creamos una funcion con un parametro i
        agregarTarea(item.nombre,item.id,item.realizado,item.eliminado) // en agregar tarea llamamos a i y le ponemos cada uno de los elementos del array
    })
}



// APUNTES:

// const elemento: cuando el usuario agrega una nueva tarea, necesita que se agregue un nuevo recuadro y demás elementos, para esto se usa, para que agregue por medio del JS este nuevo recuadro en HTML automaticamente.  
// `` Es una manera de agregar texto en bloques, en este caso, va a permitir agregar el recuadro adicional en el html. 
// ${tarea}: esto sirve para que llame al elemento tarea, para que sustituya las palabras que teniamos antes (hacer tarea de español) con las nuevas palabras que yo le estoy trayendo al elemento tarea. 
// id ="elemento" se agrega para que toda la faccion de codigo tenga una identificación 
// Metodo toogle: para agregar o quitar clases de CSS
// Estado REALIZADO: ¿es true o false? es false, cuando no esta realizado, y es true cuando está realizado
// Estado ELIMINADO: cuando es false, es porque no esta eliminado. Cuando es true, es porque si está eliminado. 
// CUANDO TENGO 2 ESTADOS INICIALES (realizao y eliminado) siempre son FALSE al INICIO. 
// id="${id}"></i> : cada vez que se cree el elemento, se va a estar colocando este id de nuevo
// Attribute: lo que hace es crear un NamedNopMap, que lo que hace es enlistar todos los identificadores que están dentro de este elemento (clase, data e id)
// Target: da el bloque de codigo del icono <i class, data y id> y tiene 3 identificadores.
// El método toggle: permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
// SessionStorage: almacenamiento solo en la sesion
// LocalStorage: almacenamiento incluso si se cierra, hay dos formas:
    // 1. localStorage.setItem('TODO',JSON.stringfy(LIST))
    // 2. localStorage.getItem('TODO') 
// setItem: es agregar, crear un elemento
// getItem: es obtener, mandarlo a llamar
// 'TODO': es un parametro con el nombre que le voy a asignar (cualquier nombre)
// JSON (javascript object notation) es una forma de crear archivos en forma de texto y es una funiconalidad que permite almacenar información (en formato texto). Basicamente es para que se entiendan entre lenguajes al compartir la información. 
// stringfy: convertir del lenguaje usado a JSON
// PARSE: Convertir de formaton JSON al lenguaje utilizado