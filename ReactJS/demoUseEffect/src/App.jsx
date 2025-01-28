import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExemploUseEffect />
    </>
  )
}

export default App
