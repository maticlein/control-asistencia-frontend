import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Form.css';

function Login() {
    return(
        <>
        <div className="login-container">
            <h1> Plataforma de control de asistencia </h1>
            <p>Iniciar Sesión</p>
            <div className="form-card">
                <form className="form-fields">
                    <label>User</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <Link to="/create" className="form-fields-link">
                        <button className="form-fields-button">Ingresar</button>
                    </Link>
                </form>
            </div> 
        </div>
        </>
    );
}

export default Login;