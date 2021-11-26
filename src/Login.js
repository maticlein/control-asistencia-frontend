import React from 'react';
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
                    <button>Ingresar</button>
                </form>
            </div> 
        </div>
        </>
    );
}

export default Login;