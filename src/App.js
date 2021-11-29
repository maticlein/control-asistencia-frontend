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
          <li>
            <Link to="/create">Crear clase</Link>
          </li>
        </ul>
      <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/classifier" element={<Classifier />} />
      </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;