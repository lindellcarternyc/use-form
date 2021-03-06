import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <input 
        name="checkbox"
        type="checkbox"
        onChange={onChange}
        checked={state.checkbox}
      />
    </div>
  );
}

export default App;
