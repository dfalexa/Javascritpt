// 2. COMPONENTE DE TIPO FUNCIÓN:

// Diferencias entre c clase y c funcion: 
// *componente clase: tiene constructores, tiene el estado privado (stage) y tiene props, se puede encontrar de forma sencilla.
// *componente función: es más agil, porque en cualquier momento cualquier función puede devolver un elemento HTML. Tiene funciones que se llamarán joops. Además podemos interactuar con todo aquello que nos ofrecen las clases, el desarrollo de componentes en react son componentes funcionales en su mayoría. 

// Estructura

import React, { useState } from 'react'; // trameos el useState aqui primero, no estaba {}
import PropTypes from 'prop-types';


const GreetingFuncion = (props) => {   // una funcion greeting con unas propiedades que le vamos a pasar (props)
    
    // Breve introducción a useState: es una función que nos permite crear un estado privado para este componente de tipo funcion.  
    // const [var, metodo para actualizarla] = useState(valor inicial)
    const [age, setage] = useState(29); // vamos a tener una const con el [nombre de la variable, la funcion que la va a ejecutar y generar nuevos valores] = useState (valor que la va a ininciar)

    const birthday = () => { // crear el metodo birthday que será de tipo flecha
        setage(age + 1); // actualizamos el state, que va a ser llamado desde el boton.  
    }

    return (
        <div>
            <h1>
                ¡Hola { props.name }! Este es un componente funcional.
            </h1>
            <h2>
                Tu edad es de: { age } años.
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingFuncion.propTypes = {
    name: PropTypes.string
};


export default GreetingFuncion;

// Explicación HTML: 
// quitamos el this en this.props.name, ya que tenemos la función no debemos indicar el this.
// state.age no podemos tenerlo, al igual que el button. 
// Pintamos el componente: cogiendo el nombre del componente que es GreetingFunction y lo llevamos a App.js y lo comentamos de la siguiente manera
// Al ser una funcion, no existe un constructor por tanto, no existe state. ¿como lo cambiamos?:
//