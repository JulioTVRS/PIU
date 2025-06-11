import { useState } from 'react'
import './App.css'

//Importação dos componentes para ser possível o uso na aplicação
import ContadorClick from './components/ContadorClick'
import ListaCarros from './components/ListaCarros'

function App() {
  return (

    // Utilização dos componentes
    <>
      <ContadorClick/> 

      <ListaCarros/>
    </>
  )
}

export default App
