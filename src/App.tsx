import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NumberInputExample } from './use-form/Input.example'

function App() {
  const num = document.querySelector(`input[type=number]`)
  console.dir(num)
  return (
    <div className="App">
      <NumberInputExample />
    </div>
  );
}

export default App;
