import logo from './logo.svg';
import './App.css';
import greetingClase from './components/pure/greetingClase'; // aqui importamos a greeting para que tome el archivo react
import GreetingFuncion from './components/pure/greetingFuncion';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx */}
        {/*<greetingClase name="Alexa"></greetingClase>*/}
        {/*Componente de ejemplo función*/}
        {/*<greetingFuncion name="Alexa"></greetingFuncion>**/}
        {/*Componente de listado de tareas*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;

// Se coloca {/* Componente propio greeting.jsx */} para que nos tome el componente desde react hasta aqui. Se coloca entre llaves porque planteamos contenido JS, es decir estamos embebiendo JS dentro de HTML. 
// <Greeting></Greeting> es para que nos tome el contenido en react js (jsx) y lo renderice según lo que tengamos en nuestro react. 

// Greeting de clase:
// {/*<Greeting name="Alexa"></Greeting>*/} 

// Greeting de función:
// <GreetingFuncion name="Alexa"></GreetingFuncion>

//Usamos el greeting de función, por eso el greeting de clase está comentado. 
