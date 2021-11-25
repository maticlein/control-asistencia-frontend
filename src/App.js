import React, { useEffect, useRef, useState } from "react";
import ml5 from 'ml5';
import useInterval from '@use-it/interval';
import './App.css';

import Chart from './Chart';

let classifier;

function App() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        console.log(results)
      });
    }
  }, 2000);
  const toggle = () => {
    setStart(!start);
    setResult([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Control de asistencia
        </h1>
        <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="300"
            height="150"
          />
          {result.length > 0 && (
          <div>
            <Chart data={result[0]} />
          </div>
        )}
        <button onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
      </header>
    </div>
  );
}

export default App;