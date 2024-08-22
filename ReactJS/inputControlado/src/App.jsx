
import React, { useState } from 'react';
import Outro from './components/Outro';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tela, setTela] = useState('');

  function tratarClique(){
    setTela(inputValue)
  }
  return (
    <div>
      <h2>Input com função nominal auxiliar no onChange</h2>
      <input
        type="text"
        value={inputValue}
        onChange={ (e) => setInputValue(e.target.value) }
      />

      <button onClick={tratarClique}>Clica</button>

      <p>O valor do input é: {inputValue}</p>
      <p>O valor lido do input no momento do clique foi: {tela}</p>


      <Outro />


    </div>
  );
}

export default App;
