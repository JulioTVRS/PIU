import { useState } from 'react'
import './App.css'
import ListaMap from './components/ListaMap'
import ListaFilter from './components/ListaFilter'
import ListasObj from './components/ListaObj'
import DropDown from './components/DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaMap/>
      <ListaFilter/>
      <ListasObj/>
      <DropDown/>
    </>
  )
}

export default App
