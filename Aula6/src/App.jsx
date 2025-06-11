import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoDashboard from './components/ToDoDashboard'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <button onClick={toggleTheme} style={{margin: '15px'}}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    
      <ToDoDashboard darkMode={darkMode}>
        <ToDoList/>
      </ToDoDashboard>
    </>
  );
}


export default App
