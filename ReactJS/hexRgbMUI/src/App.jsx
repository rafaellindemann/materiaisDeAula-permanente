import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorConverter from './components/ColorConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorConverter />
    </>
  )
}

export default App
