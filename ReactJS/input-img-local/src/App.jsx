import { useState } from 'react'
import './App.css'

function App() {
  const [fileName, setFileName] = useState('');

  const receberImagem = (event) => {
        const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
        console.log(event.target.files);
        
        if (file) {
            setFileName(file.name); 
        } else {
            setFileName('');
        }
    };

  return (
    <>
      <div style={{display:'flex', flexDirection: 'column'}}>

        <label htmlFor="file-upload">Selecione a Imagem:</label>
        <input 
            type="file" 
            accept="image/*" 
            onChange={receberImagem} 
        />

        {fileName && 
          <img src={`./imgs/${fileName}`} alt="" style={{width:'300px'}}/>
        }

      </div>
     
    </>
  )
}

export default App
