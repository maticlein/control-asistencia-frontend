import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Create from './Create'
import Classifier from './Classifier';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <nav>
        <Link to="/">
          <img src="./img/Flechitas.png" className="navbar-logo" alt="logo innovacion curricular"></img>
        </Link>
        <ul className="navbar-menu">
            <li>
              <Link to="/signup" className="navbar-menu-option">Registro</Link>
            </li>
            <li>
              <Link to="/login" className="navbar-menu-option">Inicia Sesión</Link>
            </li>
            <li>
              <Link to="/create" className="navbar-menu-option">Crear clase</Link>
            </li>
            <li>
              <Link to="/classifier" className="navbar-menu-option">Classifier</Link>
            </li>
        </ul>
      </nav>
      <div>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/classifier" element={<Classifier />} />
      </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;