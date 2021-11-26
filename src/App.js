import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Classifier from './Classifier';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classifier">Classifier</Link>
          </li>
          <li>
            <Link to="/signup">Registro</Link>
          </li>
          <li>
            <Link to="/login">Inicia Sesión</Link>
          </li>
        </ul>
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/classifier" element={<Classifier />} />
      </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;