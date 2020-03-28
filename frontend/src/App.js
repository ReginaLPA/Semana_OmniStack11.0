import React from 'react';

import './global.css';
//import Header from './Header';
import Routes from './routes';
//import Logon from './pages/Logon';
//import Register from './pages/Register';
//jsx qdo o html é dentro do javaScript

/*
function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter +1);

  }
  return (
  <Header>
      Semana OmniStack
   </Header>

   <div>
    <Header>Contador:{counter}</Header>
    <button onClick={increment}>Incrementar</button>
   </div>
  );
}
*/
function App() {
  return (
    <Routes />
    
  );
}

export default App;
