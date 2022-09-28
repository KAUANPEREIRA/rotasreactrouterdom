import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import { About } from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr></hr>
      <div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
      <hr></hr>
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;
