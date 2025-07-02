import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <>
    <h1>This is home page</h1>
    <button onClick={()=>{handleLogin()}}>login</button>
    </>
  )
}

export default App
