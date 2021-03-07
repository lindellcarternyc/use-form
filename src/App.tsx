import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { CheckboxGroupExample, RadioInputExample } from './use-form/Input.example'
// import { NumberInputExample } from './use-form/Input.example'

function App() {
  const [state, setState] = useState({
    checkbox: false
  })

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.type === 'checkbox') {
      setState({
        ...state,
        [evt.target.name]: evt.target.checked
      })
    }
  }

  return (
    <div className="App">
      {/* <NumberInputExample /> */}
      {/* <input 
        name="checkbox"
        type="checkbox"
        onChange={onChange}
        checked={state.checkbox}
      />
      <CheckboxGroupExample /> */}
      <RadioInputExample />
    </div>
  );
}

export default App;
