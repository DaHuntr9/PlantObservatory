import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          PlantObservatory
        </h1>
        <h2>
          Please select from the actions below!
        </h2>
        <div className='btn-group'>
          <button onClick={takePicture}>
            Take a Pic!
          </button>
          <button onClick={take360Video}>
            Take a 360 Vid!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

function take360Video(){
  console.log("Video Button Works")
}

function takePicture(){
  console.log("Picture Button Works")
}