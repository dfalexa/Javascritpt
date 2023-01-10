//1. Task_list renderice a task:
    // *App va a renderizar a task_list y este a su vez va a renderizar a task y así, tendremos una jerarquia de 3 niveles. 

// 2. Siempre tenemos que importar la clase con rfcp "realfunctionalwithpoptypes"
// 3. Los task components van a recibir una serie de props

import React from 'react'; 
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => { // cuando hay una declaración del componente se ejecuta la función, lo que hará es ejecutar está función y devolver algo 
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL); // Aca debemos declarar la función Task
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
    
    return ( // vamos a devovler 1 tarea con el return
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
             {/* TODO: Aplicar un For/Map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;



