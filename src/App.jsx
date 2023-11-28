import { useState } from 'react'
import HomePage from './components/Homepage'
import './App.css'

function App() {
  return (
    <>
      <h1>TrailSeeker</h1>
      <HomePage userLocation="18.0649,59.3293" />
    </>
  )
}

export default App
