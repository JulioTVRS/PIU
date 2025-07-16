import { useState } from 'react'
import './App.css'
import ButtonBackground from './components/ButtonBackground'
import EffectAPI from './components/EffectAPI'
import RepoJson from './components/RepoJson'

function App() {
  return (
    <>
      <ButtonBackground/>
      <EffectAPI/>
      <RepoJson/>
    </>
  )
}

export default App
