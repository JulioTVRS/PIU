import { useState } from 'react'
import './App.css'
import TableUsername from './components/TableUsername'
import TableName from './components/TableName'
import TableCity from './components/TableCity'
import EnviarDados from './components/EnviarDados'


function App() {
  return (
    <>
      <TableUsername/>
      <TableName/>
      <TableCity/>
      <EnviarDados/>
    </>
  )
}

export default App
