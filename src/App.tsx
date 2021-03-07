import './App.css';

import { 
  CheckboxGroupExample, 
  NumberInputExample, 
  RadioInputExample,
  TextInputExample
} from './use-form/Input.example'
function App() {

  return (
    <div className="App">
      <NumberInputExample /> 
      <br />
      <CheckboxGroupExample />
      <br />
      <RadioInputExample />
      <br />
      <TextInputExample />
    </div>
  );
}

export default App;
