import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReactDark } from './components/icons/ReactDark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactDark />
    </>
  )
}

export default App
