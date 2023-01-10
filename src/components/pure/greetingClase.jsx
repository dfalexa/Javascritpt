// Crear un componente HTML que podemos renderizar, añadiendolo al arbol de componentes que tenemos dentro del proyecto. 
// Para crear nuestro primer componente haremos un componente de tipo clase y componentes funcionales. 

// 1. COMPONENTE TIPO CLASE:

import React, { Component } from 'react'; // importamos el componente react (para cuando se renderice el proyecto se sepa que se trata de un componente react). Component es una clase, que la estamos extendiendo más abajo. 
import PropTypes from 'prop-types'; // PropTypes exporta un rango de validadores que pueden ser usados para estar seguros que la información recibida sea válida. De esta forma, en desarollo, podemos saber si estamos pasándole al componente los tipos de datos correctos. 

// Los proptypes nos sirven para especificar el tipo de dato que estamos pasando, en js tenemos un tipado debil, tenemos que buscar la manera de que se use correctamente el componente. Si el name es una cadena de texto, tiene que ser una cadena de texto, no puede ser un número
class Greeting extends Component { // componente es una clase, que requiere un metodo que es render. 
    
    // Se lo debo pasar al elemento padre:
    constructor(props){ //props, son las propiedades que puede recibir un componente, tambien puede ser HTML.
        super(props); // informacion que le voy a pasar por atributos
        this.state = { // this.state es para dar un valor totalmente privado, es inofrmación que tiene el componente que puede modificarse, y cuando se modifique actualizaria la vista
            age : 29
        }
    }
    render() { // render debe devolver un div con el HTML. Es una combinación de contenido JS y HTML. 
        return ( // solo puedo tener UN DIV elemento padre (un unico elemento, y dentro el contenido)
            <div> 
                <h1>
                    ¡Hola { this.props.name }!
                </h1>
                <h2>
                    Tu edad es de: { this.state.age } años.
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => { // vamos a agregar una seccion de cumpleaños tipo flecha, ¿por qué de tipo flecha? para poder asociar los atributos y demás con la palabra this asociada a la clase, y no a los parametros que están entre el parentesis de la función
        this.setState((prevState) => ( // setState para actualizar la vista. PrevState para tener y actualizar el resultado previo, es decir, aquí toma la edad de 29. 
                {
                    age: prevState.age +1 // una vez tenemos el dato anterior con prevState, le ponemos la edad y le sumamos 1, cada vez que presionemos el botón se sumará en 1.
                }           
            ))
    }
}

// Explicacion del HTML:
// no tenemos nuestro componente, lo colocamos en la app.js como componente propio. 
// En Hola, usamos llaves {} para concatenar codigo JS. 
// ¡Hola! { this.props } esto quiere decir que de las propiedades que voy a recibir, voy a pintar el name. 
// stage: es privado e inmutable. No puedo cambiarlo a menos que lo haga con una función especifica, porque tengo que forzar y regenerarlo. La funcion se llama set state para componente de tipo clase, por ejemplo. 
// button on Click: esto lo hacemos para que se active la funcion de birthday con los cambios de sumar + 1años en la edad. Onclick queire decir que se habilitará cuanod la persona haga click. Al final de esta parte <button onClick={this.birthday}> irian unos () quedando así:  {this.birthday()} pero no se van a poner aún porque se activa el botón con la funcion birthday = (), es decir hará un recuento infinito sin darle click al botón.  

Greeting.propTypes = { // aqui podemos especificar qué tipo de dato será el nombre
    name: PropTypes.string, // el propType (name) será solo de tipo string

};


export default Greeting;



// NOTAS:
// Abrir página: cd mi app y luego poner npm start
// Las clases y los componentes van en mayusculas. 
// Dentro del componente APP debe ir el greeting, debe estar anidado a app. 
// Los componentes de tipo clase vs los componentes de tipo funcion:
// componente de tipo clase: tienen un "constructores, propiedades de clase, metodos propios."
// componente de tipo función: tienen "funciones" tienen que devolver algo también, pueden tener funciones dentro de funciones. 
// Valor de prop es el nombre
// Valor de stage es la edad