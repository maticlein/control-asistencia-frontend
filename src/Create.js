import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Create.css';
import './Form.css';

function Create() {
    const [form, setValues] = useState({
        subject: "",
        teacher: "",
        date: "",
        time: "",
        loading: false,
    });

    const handleInput = (event) => {
        setValues({
          ...form,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        setValues({
          ...form,
          loading: true,
        });
        axios
          .post("https://localhost:3001/api/lessons", form)
          .then((response) => {
            console.log(response);
            setValues({
                ...form,
                loading: false,
            });
          });
      };

    return (
        <>
        <div className="create-container">
            <h1> Plataforma de control de asistencia </h1>
            <p>Ingresa los datos de tu clase</p>
            <div className="form-card">
                <form className="form-fields">
                    <label>Nombre asignatura</label>
                    <input name="subject" onChange={handleInput}></input>
                    <label>Profesor</label>
                    <input name="teacher" onChange={handleInput}></input>
                    <label>Fecha</label>
                    <input name="date" type="date" onChange={handleInput}></input>
                    <label>Hora inicio</label>
                    <input name="time" type="time" onChange={handleInput}></input>
                    <Link to="/classifier" className="form-fields-link">
                        <button className="form-fields-button" onClick={handleSubmit}>Crear clase</button>
                    </Link>
                </form>
            </div> 
        </div>
        </>
    );
}

export default Create;