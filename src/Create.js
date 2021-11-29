import React from 'react';
import { Link } from 'react-router-dom';
import './Create.css';
import './Form.css';

function Create() {
    return (
        <>
        <div className="create-container">
            <h1> Plataforma de control de asistencia </h1>
            <p>Ingresa los datos de tu clase</p>
            <div className="form-card">
                <form className="form-fields">
                    <label>Nombre asignatura</label>
                    <input></input>
                    <label>Profesor</label>
                    <input></input>
                    <label>Fecha</label>
                    <input type="date"></input>
                    <label>Hora inicio</label>
                    <input type="time"></input>
                    <Link to="/classifier" className="form-fields-link">
                        <button className="form-fields-button">Crear clase</button>
                    </Link>
                </form>
            </div> 
        </div>
        </>
    );
}

export default Create;