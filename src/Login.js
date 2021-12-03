import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Form.css';

function Login() {
    return(
        <>
        <div className="login-container">
            <h1> Plataforma de control de asistencia </h1>
            <div className="home-menu">
                <div className="home-image-container">
                    <img src="./img/lista.jpg" alt="home" className="home-image"></img>
                </div> 
                <div className="form-card">
                    <form className="form-fields">
                        <label>User</label>
                        <input></input>
                        <label>Password</label>
                        <input type="password"></input>
                        <Link to="/create" className="form-fields-link">
                            <button className="form-fields-button">Ingresar</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;