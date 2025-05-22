import { useState } from 'react'
import './App.css'
import Props from './components/Props'
import imagem from './assets/rat.jpg'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Props name={"Sim"} newname={"NomeNovo"}/>
      <Props name={"NomeVelho"} newname={"Não"} card={<Card/>}></Props>
      <Props name={"Nome"}/>
      
    </>
  )
}

export default App
