import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import domtoimage from 'dom-to-image-more';
import Form from './components/Form';


// CONTINUE WITH REFS AND STATES

function App() {
  return (
    <div className="App">
      <h1> Meme Generator</h1>
      <Form />
    </div>
  );
}

export default App;
