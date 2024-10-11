import { useState } from 'react'
import './App.css'
import Faq from './components/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Faq />
    </>
  )
}

export default App
