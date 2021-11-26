import React from 'react';
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
                    <button>Ingresar</button>
                </form>
            </div> 
        </div>
    );
}

export default Signup;