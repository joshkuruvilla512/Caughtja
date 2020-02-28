import React from 'react';
import logo from './logo.svg';
import { ReactBingmaps } from 'react-bingmaps';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactBingmaps 
  bingmapKey = "[AgQdTxfFOCMf8FdaJq_oBh_Yxul4yVGFcFKFDpQ2JE9X2WOxLjDeMtv-9LqiqBoC]" > 
</ReactBingmaps>
    </div>
  );
}

export default App;
