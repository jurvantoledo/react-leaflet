import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import SecretgardenMap from './Components/Map';

function App() {  

  return (
    <div className="App">
      <h1>The map</h1>
      <SecretgardenMap />
      <p>More text</p>
    </div>
  );
}

export default App;
