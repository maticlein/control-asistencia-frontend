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
                    <input autocomplete="off"></input>
                    <label>Password</label>
                    <input type="password" autocomplete="off"></input>
                    <Link to="/login" className="form-fields-link">
                        <button className="form-fields-button">Registrarse</button>
                    </Link>
                </form>
            </div> 
        </div>
    );
}

export default Signup;