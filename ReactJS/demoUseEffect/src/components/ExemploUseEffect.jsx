import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {
  const [contagem, setContagem] = useState(0);
  const [texto, setTexto] = useState('');

  // Sem array de dependências: executa em todas as renderizações
  useEffect(() => {
    console.log('Sem array de dependências: executa em todas as renderizações');
  });

  // Com array de dependências vazio: executa apenas na montagem
  useEffect(() => {
    console.log('Array vazio: executa apenas na montagem');
  }, []);

  // Com dependência: executa quando 'contagem' muda
  useEffect(() => {
    console.log(`Com dependência: 'contagem' mudou para ${contagem}`);
  }, [contagem]);

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Incrementar Contagem</button>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  );
}

export default ExemploUseEffect;
