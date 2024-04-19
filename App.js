// Botones de suma
// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           hola
//         </a>

//         <div className="Button-container">
//           {/* Botón para incrementar el contador */}
//           <button className="App-button" onClick={() => setCount(count + 1)}>
//             incrementa 
//           </button>
//         </div>
//         <br/>{/*salto de linea*/}

//         <div>
//            {/*boton para decrementar*/}
//            <button className="App-button" onClick={() => setCount(count - 1)}>
//             decrementar
//           </button>
//         </div>
//         <br/>

//         <div>
//            {/*reiniciar*/}
//           <button className='App-button' onClick={()=>setCount(0)}>
//             volver a 0 
//           </button>
//         </div>
//         <br/>


//         <p>{count}</p>
//       </header>
//     </div>
//   );
// }

// export default App;







// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   {/*FUNCIONES*/}
//   const[mostrarHola, setMostrarHola]= useState(true);
 

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hola
//         </a>

//         <div className="App">
//           <div className="Button-container">
//             <button className="App-button" onClick={()=>setMostrarHola(false)} >
//             deshabilitar  
//             </button>

//             <button className="App-button" onClick={()=>setMostrarHola(true)}>
//             habilitatar
//             </button>
//           </div>
//         </div> 
//         <br/>  {/* salto de linea  */}
        

//         {mostrarHola &&(
//           <div>
//             <button className='App-button'>
//             Hola 
//             </button>
//           </div>
//         )}
        
//       </header>
//     </div>
//   );
// }

// export default App;




// lista de tareas 
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tareas, setTareas] = useState([]);
//   const [nuevaTarea, setNuevaTarea] = useState('');

//   //funcion para que funcione el ENTER
//   const manejarKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       console.log('Se presionó la tecla Enter');
//       agregarTarea();
//     }
//   };


//   const agregarTarea = () => {
//     if (nuevaTarea.trim() !== '') {
//       const nuevaListaTareas = [...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }];
//       setTareas(nuevaListaTareas);
//       setNuevaTarea('');
//     }
//   };


//   const marcarComoCompletada = (id) => {
//     const nuevaListaTareas = tareas.map(tarea => {
//       if (tarea.id === id) {
//         return { ...tarea, completada: !tarea.completada };
//       }
//       return tarea;
//     });
//     setTareas(nuevaListaTareas);
//   };

 

//   const eliminarTarea = (id) => {
//     if (id === null) {
//       setTareas([]);
//     } else {
//       const nuevaListaTareas = tareas.filter(tarea => tarea.id !== id);
//       setTareas(nuevaListaTareas);
//     }
//   };
  

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Lista de Tareas</h1>
//         <input
//           className='App-witgets'
//           type="text"
//           value={nuevaTarea}
//           onChange={(e) => setNuevaTarea(e.target.value)}
//           placeholder="Agregar nueva tarea"
//           onKeyDown={manejarKeyPress}
          
//         />
        
      
//         <button className="App-button Button-container" onClick={agregarTarea}>Agregar</button> 
//         <button className='App-button Button-container' onClick={() => eliminarTarea(null)}>Eliminar Lista</button>

      

//         <ul>
//           {tareas.map(tarea => (
//             <li key={tarea.id}>
//               <input
//                 type="checkbox"
//                 checked={tarea.completada}
//                 onChange={() => marcarComoCompletada(tarea.id)}
//               />
//               <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>{tarea.texto}</span>
//               <button  className="Button-container App-button" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;








import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <div className='input-group'>
        <p>Nombre:</p>
        <input type="text" className='input-group'>
        </input>
      </div>

      </header>
    </div>
  );
}

export default App;
