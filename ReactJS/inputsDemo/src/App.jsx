import React, { useState } from 'react';
import './App.css'; // Certifique-se de criar o arquivo App.css com as variáveis CSS

function App() {
  const [dinossauro, setDinossauro] = useState({
    nome: '',
    peso: '',
    extinto: false,
    periodo: '',
    tipo: '',
    dataDescoberta: '',
    emailDescobridor: '',
    cor: '#000000',
    altura: 25,
  });

  const [dinossauros, setDinossauros] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDinossauro((prevDino) => ({
      ...prevDino,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCadastro = () => {
    setDinossauros((prevDinos) => [...prevDinos, dinossauro]);
    setDinossauro({
      nome: '',
      peso: '',
      extinto: false,
      periodo: '',
      tipo: '',
      dataDescoberta: '',
      emailDescobridor: '',
      cor: '#000000',
      altura: 25,
    });
  };

  return (
    <div className="app">
      <h1>Cadastro de Dinossauros</h1>
      
      <div className="input-group">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={dinossauro.nome}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          name="peso"
          value={dinossauro.peso}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Extinto:</label>
        <input
          type="checkbox"
          name="extinto"
          checked={dinossauro.extinto}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Período:</label>
        <div>
          <input
            type="radio"
            name="periodo"
            value="triássico"
            checked={dinossauro.periodo === 'triássico'}
            onChange={handleInputChange}
          /> Triássico
          <input
            type="radio"
            name="periodo"
            value="jurássico"
            checked={dinossauro.periodo === 'jurássico'}
            onChange={handleInputChange}
          /> Jurássico
          <input
            type="radio"
            name="periodo"
            value="cretáceo"
            checked={dinossauro.periodo === 'cretáceo'}
            onChange={handleInputChange}
          /> Cretáceo
          <input
            type="radio"
            name="periodo"
            value="mesozóico"
            checked={dinossauro.periodo === 'mesozóico'}
            onChange={handleInputChange}
          /> Mesozóico
        </div>
      </div>

      <div className="input-group">
        <label>Tipo:</label>
        <select name="tipo" value={dinossauro.tipo} onChange={handleInputChange}>
          <option value="">Selecione...</option>
          <option value="terrestre">Terrestre</option>
          <option value="voador">Voador</option>
          <option value="marinho">Marinho</option>
        </select>
      </div>

      <div className="input-group">
        <label>Data de Descoberta:</label>
        <input
          type="date"
          name="dataDescoberta"
          value={dinossauro.dataDescoberta}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Email do Descobridor:</label>
        <input
          type="email"
          name="emailDescobridor"
          value={dinossauro.emailDescobridor}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Cor Sugerida:</label>
        <input
          type="color"
          name="cor"
          value={dinossauro.cor}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Altura (0-50m):</label>
        <input
          type="range"
          name="altura"
          min="0"
          max="50"
          value={dinossauro.altura}
          onChange={handleInputChange}
        />
        <span>{dinossauro.altura} metros</span>
      </div>

      <button onClick={handleCadastro}>Cadastrar</button>

      <h2>Dinossauros Cadastrados</h2>
      <ul>
        {dinossauros.map((dino, index) => (
          <li key={index}>
            {dino.nome} - {dino.peso}kg - {dino.extinto ? 'Extinto' : 'Vivo'} - {dino.periodo} - {dino.tipo} - Descoberto em: {dino.dataDescoberta} - Contato: {dino.emailDescobridor} - Cor: {dino.cor} - Altura: {dino.altura} metros
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
