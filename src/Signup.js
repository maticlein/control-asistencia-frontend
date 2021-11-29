import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import './Form.css';

function Signup(){
    return(
        <div className="signup-container">
            <h1> Plataforma de control de asistencia </h1>
            <p>Regístrate</p>
            <div className="form-card">
                <form className="form-fields">
                    <label>User</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <Link to="/" className="form-fields-link">
                        <button className="form-fields-button">Registrarse</button>
                    </Link>
                </form>
            </div> 
        </div>
    );
}

export default Signup;