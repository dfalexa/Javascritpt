// 1. HTML Elementos:

const board = document.getElementById('board'); // const declara una variable de scope global, local para la función o de bloque. No es reasignable, pero es mutable.
const scoreBoard = document.getElementById('scoreBoard'); // al final entre comillas va tal cual como lo creamos en HTML)
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

 // 2. Game settings
const boardSize =10; // tamaño del board
const gameSpeed = 100; // velocidad, son 100 milisegundos
const squareTypes = { // tipos de cuadrados que tenemos
    emptySquare: 0, // cuadrado vacio
    snakeSquare: 1, // cuadrado donde está la serpiente
    foodSquare: 2,  // cuadrado donde está la comida
};
const directions = { // mapear las direcciones
    // Una expresión de función flecha arrow es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
    ArrowUp: -10,  // flecha para arriba, com -10 lugares en el arrow
    ArrowDown: 10, 
    ArrowRight: 1,
    ArrowLeft: -1,
};

// 3. Game variables

    // let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.
let snake; // snake va a ser un arrow donde vamos a guardar a la serpeinte con todos sus valores
let score;  
let direction; // cada vez que el usuario interactua con la dirección de la serpiente
let boardSquares; // guarda en el array informacion del tablero 
let emptySquares; // guardar la comida de la serpiente en lugares aleatorios. Para esto, se debe saber que lugares estan vacios, para que esos lugares vacios puedan ser guardados, y sepamos donde dejamos la comida.  
let moveInterval; // guarda el intervalo para hacer el movimiento de la serptiente. Un intervalo ejecuta una función cada cierto punto, lo usaremos con game speed para ejecutarlo cada determinado tiempo.

    // Crear la función drawSnake con drawSquare y declararla:
const drawSnake = () => {
    snake.forEach( square => drawSquare(square, 'snakeSquare')); // tomar a snake y por cada uno de ellos vamos a dibujar un cuadrado y que lo dibuje de tipo snakeSquare
}
 // 3. Rellenar cada cuadrado del tablero 
 // Declaro la función drawSnake para pintar cuadrados. Rellenamos cada cuadrado del tablero, @params, square: posición del cuadrado, type: tipo de cuadrado (emptySquare, snakeSquare, foodSquare) son los parametros que va a tener el square
const drawSquare = (square, type) => {   // 1.posición del cuadrado que queremos pintas (square) y 2. que tipo de cuadrado queremos pintar (type) aquí tenemos el empty, snake y food.
    const [ row, column ] = square.split(''); // usamos el split para separar el row de la columna, es como dividir los cuadros. 
    boardSquares[row][column] = squareTypes[type];  // luego de hacer el split vamos a nuestro boardSquares para que se guarde todo allí, y hacemos que tome cada tipo de square por medio del "squareTypes", entonces lo que hace es ir tomando cada empty, snake y food square para aplicar el split. 
    const squareElement = document.getElementById(square); // para llevar los elementos anteriores al HTML, necesitamos coger el document.getElementById para insertar el cambio de square por medio del id 
    squareElement.setAttribute('class', `square ${type}`); // seteamos la clase a square y el tipo (van concatenados) porque son los que trabajabamos arriba. Los pinta también del color que tiene cada uno

    if(type === 'emptySquare') { // Tenemos dos posibilidades: si lo que queremos crear es un tipo empty, entonces tomamos el array emptySquares y le agregamos ese square
        emptySquares.push(square);
    } else { 
        if(emptySquares.indexOf(square) !== -1) { // si no queremos el empty square, tenemos que sacar el emptySquare del array con indexOf 
            emptySquares.splice(emptySquares.indexOf(square), 1); // si existe el empty vamos a sacarlo con splice y el index del elemento, el 1 quiere decir que solo va a ser un empty el que se sacará
        }

    }
}

    // Llamar la funcion moveSnake, declarar función:}
const moveSnake = () => {   
    const newSquare = String( // necesitamos saber cuál es el nuevo square, si se está moviendo para la derecha vamos a crear un nuevo square que será un string
        Number(snake[snake.length -1]) + directions[direction])  // Obtener el nuevo cuadrado a donde se moverá la snake. el string estará compuesto por el último lugar de la snake (con la longitud) y le vamos a sumar el valor que le corresponda a la direccion (si esta yendo para algun lado vamos a tomar const directions que esta arriba con valores) y ese valor es el que vamos a sumar. 
        .padStart(2, '0'); // .padStar para rellenar la cadena actual con una cadena dada que se repite. Usamos padStar 2 y 0, porque si se mueve el 0 al 1, va a quedar vacio el 0 y tenemos que agregarle el 1  
    const [row, column] = newSquare.split(''); // vamos a tomar el row y la columna (el primeor y el segundo valor) para poder seleccionar despues en el boardSquares lo que necesitemos. El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

    // en que momento el juego se termina, cuando se choca contra las paredes y choca contra si misma
    if( newSquare < 0 ||  // si el newsquare es <0 quiere decir que se choco arriba porque no hay menor que cero
        newSquare > boardSize * boardSize ||  // o si el newsquare es > al boardsize * bsize se fue mas alla del 99 y por lo tanto se fue para abajo
        (direction === 'ArrowRight' && column == 0) || // si la serpiente esta yendo a la derecha (true) y la columnas llegan como maximo hasta 9, entonces si está en cero es porque se salio de la board
        (direction === 'ArrowLeft' && column == 9 ||
        boardSquares[row][column] === squareTypes.snakeSquare) ) { // cuando se toca a si misma, si en ese square row o column esta ocupado el valor por la serpiente
        gameOver(); // si cualquiera sucede, llamamos a la funcion game over
    } else {
        snake.push(newSquare); // cuando el juego continua, tenemos que pintar el cuadrado que falta y hacia donde la serpiente se va moviendo
        if(boardSquares[row][column] === squareTypes.foodSquare) { // si en el array del tablero, ese square es un foodsquare entonces acaba de crecer la serpiente, en ese caso vamos a llamar la funcion addFood
            addFood();  // va a agregar el cuadrado push a la serpiente
        } else {  // si no es un foodsquare
            const emptySquare = snake.shift(); // la serpeinte sigue, se le agrega un cuadro con push pero se le quita otro con shift
            drawSquare(emptySquare, 'emptySquare'); // dibujamos el cuadro vacio con un emptySquare
        }
        drawSnake(); // pintamos nuevamente la serpiente a la derecha
    }
}

    // Declarar la funicon
const addFood = () => {
    score++;  // subir el score, porque ahora tiene un cuadrado más la serpiente, por lo que tiene que subir el puntaje (por sobrevivir) ++ se usa para incrementar 1 valor
    updateScore(); // hacer el update del score, porque ahora tiene un score más el usuario
    createRandomFood(); // volver a crear otra comida random
}

    // Llamar la funcion gameOver
const gameOver = () => {    // declarar la funcion gameover
    gameOverSign.style.display = 'block';  // cuando se termino el juego, muestra el "gameoversign" como un display con estilo bloque 
    clearInterval(moveInterval) // se cierra el intervalo para que la serptiente se deje de mover con clearinterval
    startButton.disabled = false; // volvemos a habilitar el startButton sellando el disabled en false (disabled: disabled de CSS representa a cualquier elemento deshabilitado. Un elemento se encuentra deshabilitado si no puede ser activado (por ejemplo ser selecionado, hacer click en él o aceptar texto de entrada) ni aceptar el foco)
}

    // Llamar a la funcion setDirection
const setDirection = newDirection => {  // va a recibir la nueva direccion
    direction = newDirection; // cuando recibe la nueva dirección va a setear la variable direction. Cuando se inició se dijo que la serpeinte empezaría a la derecha, pero si el usuario toca una flecha, debemos setearlo a esa nueva dirección
}
  // La direccion del evento e interacción con usuario:
  // Explicacion case: si la serpiente va hacia arriba, no puede ir hacia abajo, si la serpiente va hacia abajo se rompe la condicion. Si la serptiente, por el contrario, va hacia otro lado que no sea abajo, lo setea a la nueva dirección, es decir, al inicio del switch (key.code) para que vuelva a tomar el caso en el que el usuario le dio la dirección. 
const directionEvent = key => { // declaro la funcion y le agrego la key, que agregamos abajo para que de interaccion al objeto
     switch (key.code) {  // von switch validamos una condición, para no poner tantos if. Key.code, qué tipo de codigo el usuario escogio, si toca la flecha hacia arriba pone el codigo ArrowUp
        case 'ArrowUp': // Caso 1, si es hacia arriba pone el key.code arrowup
            direction != 'ArrowDown' && setDirection(key.code) // si la direccion no es abajo (arrowDown), setea la nueva dirección. Si a es verdad &&(y) b es verdad, se cumple la condición. Si alguno de los dos es falso, no se cumple. Chequear que la serpeinte no puede ir en sentido contrario, no puede ir abajo y luego arriba
            break;
        case 'ArrowDown':
            direction != 'ArrowUp' && setDirection(key.code)
            break;
        case 'ArrowLeft':
            direction != 'ArrowRight' && setDirection(key.code)
            break;
        case 'ArrowRight':
            direction != 'ArrowLeft' && setDirection(key.code)
            break;
    }
}

 // RandomFood:
 // Declaro la funcion createRandomFood
const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)]; // crear un lugar Random entre todos los lugares vacios en empty squares (vacios). Para tomar los elementos de empty al azar usamos "Math.Floor" que es una funcipon y recibe como parametro a math.random (parsa que sea aleatorio) multiplicado por la longitud de los emptySquares. Nos devolvera un valor entre cero y el maximo donde esta el array
    drawSquare(randomEmptySquare, 'foodSquare'); // para pintar este RandomFood usamos el draw square, como parametro tiene el randomEmptySquare que acabamos de crear y como tipo le decimos foodSquare
}
 // Score: 
 // Declaro la función updateScore
const updateScore = () => {
    scoreBoard.innerText = score; // al scoreBoard le pongo un innerText (permite configurar o leer el contenido de texto de su elemento)
}

 // 4. Hacer el board, dar valor a los row con un id:
 // Declarar las funciones de abajo. Primero se escribe la función abajo y luego se declara arriba
const createBoard = () => {   // declaramos la función que esta abajo (createBoard), no va a tomar ningun parametro
    boardSquares.forEach( (row, rowIndex) => {  // iterar el arraw que creamos abajo de boardSquares y por cada una (.forEach) de esas row que tenemos vamos a construir la iteración (ver en la conosla del navegador la matriz de ceros, basicamente tenemos que iterar cada cero, y cada cero se conoce como un row de un array. Recordar que un array se compone de filas, fila 0, fila 1, fila 2, etc)
        row.forEach( (column, columndex) => {   // iterar el row
            const squareValue = `${rowIndex}${columndex}`;  // para que itere cada row (cada cuadrado), comienza por dar con squareValue, y este valor se tomará por medio del index (indice) del row y el index de la columna. Es decir, el primero sería 00, 01, etc hasta el 99
            const squareElement = document.createElement('div'); // crear un elemento div que es el que insertamos en nuestro tablero
            squareElement.setAttribute('class', 'square emptySquare'); // al elemento const squareElement le vamos a setear una clase que va a ser square emptysquare, que se encuentra en los estilos que hicimos en CSS (cuadrados vacios)
            squareElement.setAttribute('id', squareValue);   // le vamos a poner un id con su valor.    
            board.appendChild(squareElement);   // tomar el board y agregarle cada vez que creamos un elemento el squareElement
            emptySquares.push(squareValue); // hacer un push emptySquares del valor del Square        
        })

    })
}

const setGame = () => {  // declaramos la set game que construimos abajo
    snake = ['00', '01', '02', '03']; // creamos la serpiente, va a tener un largo de 4, y la primera posición será en la esquina superior izquierda en el cuadrado 00 con 01, 02, 03.
    score = snake.length; // será el igual del largo de la serpiente cuando le agreguemos un número más, que suba uno el score
    direction = 'ArrowRight'; // la dirección empezará siendo a la derecha 
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));  // crear el board que es nuestra estructura de datos donde vamos a guardar la formación del tablero. Será un array de 2 dimensiones. Se crea con array from, para tomar 2 parametros, el primero es el boardSize (que tiene 10 elementos); y a cada uno de esos elmentos le pasamos el otro array (newArray(boardsize).fill etc) que tiene 10 elementos, y lo vamos a rellenar con .fill, que esta compuesto de los squareTypes y de eso tomamos que nos lo llene con .emptySquare (cuadrados vacios). fill es un método mutador: modifica el arreglo sobre el que se invoca; no devuelve una copia de éste. Si el primer parámetro es un objeto, copia su referencia y rellena el arreglo con referencias a dicho objeto
    console.log(boardSquares); // me muestra el cuadro de ceros, 10*10 (se puede ver desde el navegador en ispeccionar)
    board.innerHTML = '';    // se crear para resetear el juego, y borrar cualquier contenido que tenga el jugador guardado, así podrá iniciar el juego de nuevo. innerHTML para recuperar el contenido actual de un contenedor o insertar nuevo contenido en ese contenedor. Por contenedor entendemos aquello que está entre las cláusulas < div > y < /div > 
    emptySquares = [];  // crear un array vacio para empty squares, porque se debe rellenar a medida que creemos nuestro tablero.
    createBoard(); // crear el tablero, por medio de la función. Vamos a declararla arriba. create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado. 
}

 // 5. Comienzo del juego (cuando el usuario juega) 
const starGame = () => {
    setGame();  // con set le damos valores a las "game variables" de arriba para que el juego pueda comenzar 
    gameOverSign.style.display = 'none'; // ocultar el game over, porque cuando el usuario juega no se debe ver
    startButton.disabled = true; // deshabilitar el boton de start mientras juega el usuario
    drawSnake();  // draw es una función para dibujar. Pero para dibujarla tenemos que "pintar" cada cuadrado y lo hacemos declarando esta funcipon arriba.
    updateScore();  // actualizar el score  
    createRandomFood(); // crear la comida en un lugar diferente, cuando la serpeinte se la come
    document.addEventListener('keydown', directionEvent); // interactuar con lo que el usuario hace,  para esto se usa el metodo addEventListener. Se debe activar con keydown es cuando una tecla es presionada por el usuario y llamamos a la funcion diretionEvent, que da la direccion de la flecha y toma el evento (lo que el usuario haga)
    moveInterval = setInterval( () => moveSnake(), gameSpeed);  // crear el intervalo que va a hacer que se mueva la serpiente a la velocidad (gamespeed). SetInterval es para establecer un retardo en las funciones que son ejecutadas una y otra vez, el setInterval se va a ejecutar cada 100 milisegundos (gameSpeed), y va a ejecutar la función MoveSnake que hace que se mueva la serpiente.
}
 // Función:
startButton.addEventListener('click', starGame); // add event listener es cuando se da click, en este caso en el startbutton. El método addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario. La ventaja es que se escribe totalmente en el JS, sin necesidad de tocar el HTML.



// Definiciones:

// SETINTERVAL: La función setInterval() se utiliza comúnmente para establecer un retardo en funciones que son ejecutadas una y otra vez, como por ejemplo las animaciones. Puede cancelar el intervalo utilizando clearInterval() . Si desea que su función sea llamada una vez después del retardo especificado utilice setTimeout()
// EVENT: Los eventos de JavaScript permiten la interacción entre las aplicaciones JavaScript y los usuarios
// DOCUMENT: La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model). El árbol DOM incluye elementos como <body> y <table> , entre muchos otros.
// SET: Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto en orden de inserción. Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set 
// CREATE: create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
// INDEX: El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde ; o -1 si no se encuentra dicho valor.
// EMPY: Un empty statement o sentencia vacía es usada para no proveer una sentencia, incluso si la sintaxis JavaScript esperase una
// APPENDCHILD: appendChild() Es uno de los métodos fundamentales de la programación web usando el DOM. El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación.
// PUSH: El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
// DOM: El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento. El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.
// DISABLED: La pseudo-clase :disabled de CSS representa a cualquier elemento deshabilitado. Un elemento se encuentra deshabilitado si no puede ser activado (por ejemplo ser selecionado, hacer click en él o aceptar texto de entrada) ni aceptar el foco
// SPLIT: Divide el texto en función de una string o carácter especificados y coloca cada fragmento en una celda independiente de la fila.
// SPLICE: El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// INNERTEXT: permite configurar o leer el contenido de texto de su elemento. La propiedad innerText establece o devuelve el contenido de texto como texto sin formato del nodo especificado y todos sus descendientes, mientras que la propiedad innerHTML obtiene y establece el texto sin formato o el contenido HTML en los elementos.
// MATHFLOOR: devuelve el valor redondeado de la variable. 
// RANDOM: random() para generar números aleatorios de tipo double. El método random() devuelve un número positivo mayor o igual que 0,0 y menor que 1,0.
// AddEventListener: El método addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario. La ventaja es que se escribe totalmente en el JS, sin necesidad de tocar el HTML. Su sintaxis es muy sencilla: target.
// Keydown: keydown : este se dispara cuando una tecla es presionada.
// keypress: esta sólo se dispara cuando una tecla produce un valor de caracter es presionada. Por ejemplo, si aprietas la tecla a , este evento se disparará cuando la tecla a produzca el valor de caracter 97 .
// keys: devuelve un array cuyos elementos son strings correspondientes a las propiedades enumerables que se encuentran directamente en el object. El orden de las propiedades es el mismo que se proporciona al iterar manualmente sobre las propiedades del objeto.
// &&: a && b // si a es verdad y b es verdad, se cumple la condición. Si alguno de los dos es falso, no se cumple.
// STRING: El tipo String de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits (unidades de código UTF-16). Cada elemento de la cadena de caracteres ocupa una posición en la cadena.
// Number: es un objeto primitivo envolvente que permite representar y manipular valores numéricos cómo 37 o -9.25. El constructor Number contiene constantes y métodos para trabajar con números. Valores de otro tipo pueden ser convertidos a números usando la función Number().
// PADSTART: El método padStart() rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado desde el inicio (izquierda) de la cadena actual.
// a || b // si a es verdad o b es verdad, se cumple la condición. Aquí las dos no tiene que ser verdaderas, alguna puede ser falsa e igual se cumpliría la condición.

