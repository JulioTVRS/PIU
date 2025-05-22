import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'
import Galeria from './assets/components/Galeria';

import ashImage from './assets/ash.png';
import shrekImage from './assets/shrek.jpg';
import tomImage from './assets/tom.png';
import rockleeImage from './assets/rock_lee.png';
import madrugaImage from './assets/madruga.png';
import gohanImage from './assets/gohan.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Galeria>
        <Card imagem={ashImage} nome={"Ash Ketchum"}/>
        <Card imagem={shrekImage} nome={"Shrek"}/>
        <Card imagem={tomImage} nome={"Tom"}/>
        <Card imagem={rockleeImage} nome={"Rock Lee"}/>
        <Card imagem={madrugaImage} nome={"Seu Madruga"}/>
        <Card imagem={gohanImage} nome={"Gohan"}/>
      </Galeria>
      
    </>
  )
}

export default App
