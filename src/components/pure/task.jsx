import React from 'react';
import PropTypes from 'prop-types'; 
import { Task } from '../../models/task.class'; 


const TaskComponent = ({ task }) => { 
    return ( 
        <div> 
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description } 
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED':'PENDING' }
            </h5>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;

// Notas:
// const TaskList = () => { El task component va a recibir una serie de props, a estas props le vamos a pasar la tarea a "pintar". El componente va a tener los datos y facilita la depuración. Hacer un efecto burbuja y en los componentes de orden superior pintar los componentes que van a tener la logica y los datos. Este componente puro, se le va a pasar una tarea en formato prop 
// Para renombrar una variable y cambiarlas todas al tiempo de manera automatica, se hará con click derecho sobre el nombre y le doy "rename symbol"
// task.completed ? 'COMPLETED':'PENDING' esto quiere decir que vamos a poner un texto según un true o false ? dependiendo si la tarea está completada : o pendiente. 