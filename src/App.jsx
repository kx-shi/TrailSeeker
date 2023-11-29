import { useState } from 'react'
import HomePage from './components/Homepage'
import './App.css'

function App() {
  // I used hardcoded location for now (Stockholm)
  return (
    <>
      <h1>TrailSeeker</h1>
      <HomePage userLocation="18.0649,59.3293" />
    </>
  )
}

export default App
