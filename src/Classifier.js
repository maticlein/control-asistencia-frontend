import React, { useEffect, useRef, useState} from 'react';
import ml5 from 'ml5';
import useInterval from '@use-it/interval';
import './App.css';
import Chart from './Chart';

let classifier;

function Classifier() {
    const videoRef = useRef();
  const [result, setResult] = useState([]);

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
        // console.log(results)
      });
    }
  }, 5000);
  return (
  <div className="App">
  <h1>
    Control de asistencia
  </h1>
  <div className="App-body">
    <div className="App-body-video">
    <video
        ref={videoRef}
        style={{ transform: "scale(-1, 1)" }}
        width="600"
        height="500"
      />
    </div>
    <div className="App-body-info">
    {result.length > 0 && (
      <div>
        <Chart data={result[0]} />
      </div>
    )}
    <button>Ingreso manual</button>
    
    </div>
  </div>
</div>
);
}

export default Classifier;