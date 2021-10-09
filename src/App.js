import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import domtoimage from 'dom-to-image-more';
import Form from './components/Form';


// Creating refs

let contentContainerRef = React.useRef<HTMLElement | null>(null)
let resultContainerRef = React.useRef<HTMLElement | null>(null)

// Creating hooks for useState

const [images, setImages] = React.useState([])
const [activeImage, setActiveImage] = React.useState('')
const [textTop, setTextTop] = React.useState('')
const [textBottom, setTextBottom] = React.useState('')
const [isMemeGenerated, setIsMemeGenerated] = React.useState(false)



function App() {
  return (
    <div className="App">
      <h1> Meme Generator</h1>
      <Form />
    </div>
  );
}

export default App;
