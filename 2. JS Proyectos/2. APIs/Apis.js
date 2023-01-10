// Copio el codigo que aparece en el siguiente link: https://rapidapi.com/danielroncaglia-4Z-xI8bFyCL/api/ipstack1/
// Saco la información de la api en la pagina de RapidAPI y busco "IP Geolocation threath"


//1. Saco la url.
//2. el options lo pongo en mayusculas
const OPTIONS = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '71e59e906dnshfdc9ed284df2469plb599cjsn0355f0f200d5',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
}
// Crear un metodo fetchIpInfo

const fetchIpInfo = ip => {  // al metodo fetchIpInfo le pasamos la ip 
    return fetch('https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}', OPTIONS)  // cuando tenemos una IP al final (880.2565.255 por ejemplo) la debemos quitar, porque no cogeremos esa ip, sino la que le pasaremos como parametro "ip" que está definida arriba. Concatenamos esto con el simbolo ${ip}. Ahora, le damos devolver (return) porque el fetch devuelve una promesa 
    .then(res => res.json()) // como el fetch devuelve una promesa, tenemos que resolverla y transformar la respuesta a un json
    .catch(err => console.error(err)) // hacer un catch por si tenemos algun error que nos refleje un console error que tiene como parametro el error.
}

//Recuperando el formulario:

//Forma 1: Asi queda el codigo de manera larga: 
//const $form = document.querySelector('#form')  // Le deja el simbolo $ para saber que el form es un elemento el DOM (html)
//const $input = document.querySelector('#input') // # es para recuperar el documento 
//const $submit = document.querySelector('#submit')  // se agrega el boton submit, para mejorar la experiencia del usuario y que aparezca cargando mientras busca el resultado
//const $results = document.querySelector('#results') // se agrega el resultado

// Forma 2: Así se abrevia el codigo:
const $ = selector => document.querySelector(selector)

const $form = $('#form');  // Le deja el simbolo $ para saber que el form es un elemento el DOM (html)
const $input = $('#input'); // # es para recuperar el documento 
const $submit = $('#submit');  // se agrega el boton submit, para mejorar la experiencia del usuario y que aparezca cargando mientras busca el resultado
const $results = $('#results'); // se agrega el resultado

$form.addEventListener('submit', async (event) => {  // en el elemento form agregamos al escuchador addEventListener, del elemento submit que es al que hay que escuchar, que tiene como parametro el evento
    event.preventDefault() // con el elemento submit tenemos que hacer un preventDefault del evento porque si por defecto se llena el formulario, al hacer submit una accipón pos y se reflejaría la pagina (no queremos que pase eso)
    const {value} = $input // recuperar el valor dentro del input
    if(!value) return // si no tenemos un valor dentro del input, vamos a hacer un return

    $submit.setAttribute('disabled', '') // al boton de submit vamos a desactivarlo primero, para que de esta forma el usuario no pueda darle click mientras carga
    $submit.setAttribute('aria-busy', 'true') // saca el aria-busy de estilos "picocss" y lo pone a true, porque eso quiere decir que efectivamente el usuario interactuo, dio una ip valida 
        
    const ipInfo = await fetchIpInfo(value) // si tiene valor vamos a recuperar el ipInfo llamando al fetchIpInfo, le pasamos el valor (en este caso es la IP que se introduce en el input, o sea, que el usuario introduce en el cuadro). Como esto es una función asincrona tenemos que hacer un await, pero para usar el await necesitamos que l afunción que se esta usando sea async (esto se corrige en el codigo de arriba ('submit', async(event))
        
    if (ipInfo) {  // mostrar información si tenemos el ip info
        $results.innerHTML = JSON.stringify(ipInfo, null, 2) // mostrar la información que hemos recuperado de la API y hacemos un JESON.stringify de ipInfo (api) el JSON stringify recibe diferentes parametros: el valor, el replacer (es para transformar cosas del JSON a la hora de transformarlo) y luego los espacios 
    }
    
    $submit.removeAttribute('disabled') // estas dos lineas las quitamos despues de hacer el fetch porque ya habrá terminado de buscar
    $submit.removeAttribute('aria-busy') 
    
}) 





// En los estilos de "picocss" saca todos los estilos para que el boton aparezca cargando



// Fetch: La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
// .Then: El método then devuelve una Promise que permite encadenar métodos. Puedes pasar una lambda a then y si devuelve una promesa, una Promise equivalente será expuesta al then subsecuente en la cadena de métodos. El fragmento incluido debajo simula un código asíncrono mediante la función setTimeout.
// Res: Es un objeto respuesta.  Las funciones de middleware son funciones que tienen acceso al objeto de solicitud ( req ), al objeto de respuesta ( res ) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación.
// Json: JSON, que significa JavaScript Object Notation, es una formatación usada para estructurar datos en forma de texto y transmitirlos de un sistema a otro, como en aplicaciones cliente-servidor o en aplicaciones móviles. JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos.
// Catch: catch señala un bloque de instrucciones a intentar ( try ), y especifica una respuesta si se produce una excepción ( catch ).
// AddEventListener: El método addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario
// Submit: submit() permite iniciar el envío del formulario mediante JavaScript. Podemos utilizarlo para crear y enviar nuestros propios formularios al servidor.
// Preventdefault: Llamar a preventDefault en cualquier momento durante la ejecución, cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá. Puedes usar event. cancelable para comprobar si el evento es cancelable o no
// QuerySelector: querySelector() Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores
// Función ASÍNCRONA: En un lenguaje de programación asíncrono como JavaScript, las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.
// Await: La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.
// removeAttribute: elimina un atributo del elemento especificado.
// stringify(): convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo