import React, { useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import ml5 from 'ml5';
import useInterval from '@use-it/interval';
import './Classifier.css';
import Chart from './Chart';

let classifier;

function Classifier() {
  const videoRef = useRef();
  const [result, setResult] = useState([]);
  const [form, setValues] = useState({
    student: {
      name: "",
      temperature: null,
    },
  });
  const [temperature, setTemperature] = useState([]);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        });
    });
  }, []);

  useInterval(() => {
    if (classifier) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        if(results[0].label !== "Fondo" && results[0].confidence >= 0.85) {
          setValues({
            student: {
              name: results[0].label,
              temperature: temperature 
            }
          });
          console.log(form);
          axios.put(`http://localhost:3001/api/lessons/${sessionStorage.getItem("lesson_id")}`, form)
            .then((response) => {
              // console.log(response);
            });
        }
        // console.log(results)
      });
    }
  }, 5000);

  useInterval(() => {
    axios.get("https://control-asistencia-backend.vercel.app/api/temperature")
      .then((response) => {
        setTemperature(response.data.temperature)
      });
  }, 10000);

  const handleSubmit = () => {
    axios({
      url: 'http://localhost:3001/api/excel', //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'asistencia.xlsx'); //or any other extension
      document.body.appendChild(link);
      link.click();
  });
  };

  return (
  <div className="classifier">
  <h1>
    Control de asistencia
  </h1>
  <div className="classifier-body">
    <div className="classifier-body-video">
    <video
        ref={videoRef}
        style={{ transform: "scale(-1, 1)" }}
        width="600"
        height="500"
      />
    </div>
    <div className="classifier-body-info">
    {result.length > 0 && (
      <div>
        <Chart data={result[0]} />
      </div>
    )}
    <h3>Temperatura: {temperature} ºC</h3>
    <Link to="/manual-input" >
      <button className="main-button">Ingreso manual</button>
    </Link>
    <br></br>
    <button onClick={handleSubmit} className="main-button">Finalizar clase</button>
    </div>
  </div>
</div>
);
}

export default Classifier;