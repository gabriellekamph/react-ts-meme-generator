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

// Fetching images from API

async function fetchImage() {
  const imgData = await fetch('https://api.imgflip.com/get_memes')
  .then(res => res.json())
  .catch(err => console.log(err))
  const { memes } = await imgData.data;

  // Update images state
  await setImages(memes)

  // Update activeImage state
  await setActiveImage(memes[0].url)
}

// Function to handle text input elements 

function handleInputChange(event) {
  if (event.target.name === 'text-top') {
    setTextTop(event.target.value)
  } else {
    setTextBottom(event.target.value)
  }
}

// Function to choose random image from API fetch

function handleImageChange() {
  const image = images[Math.floor(Math.random() * images.length)]
  setActiveImage(image.url)
}

// Function to handle image upload 

function handleImageInputChange(event) {
  setActiveImage(window.URL.createObjectURL(event.target.files[0]))
}

// Function to handle meme generation

function handleMemeGeneration() {
  if (resultContainerRef.current.childNodes.length > 0) {
    resultContainerRef.current.removeChild(resultContainerRef.current.childNodes[0])
  }

  domtoimage.toPng(contentContainerRef.current).then((dataUrl) => {
    const img = new Image()
    img.src = dataUrl
    resultContainerRef.current.appendChild(img)
    setIsMemeGenerated(true)
  })
}

function App() {
  return (
    <div className="App">
      <h1> Meme Generator</h1>
      <Form />
    </div>
  );
}

export default App;
