import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FaAngellist,FaBlenderPhone,FaJava } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Icons</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  
        <div className="icones">
          <FaAngellist />
          <FaBlenderPhone />
          <FaJava />
          <MdJavascript />
        </div>
        <FaAngellist />
        <FaBlenderPhone />
        <FaJava />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App