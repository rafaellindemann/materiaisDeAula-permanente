import React, { useState } from 'react';
import './App.css';

function App(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir diálogo</button>
      <dialog open={isOpen}>
        <div className="dialog-container">
          <h1>Este é um diálogo</h1>
          <p>Conteúdo do diálogo...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, vitae consectetur. Iste iusto earum, perspiciatis rerum, corporis temporibus doloribus similique veritatis labore porro deleniti facilis beatae nisi laborum quia vel.</p>
          <button onClick={() => setIsOpen(false)}>Fechar</button>
        </div>
      </dialog>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reprehenderit voluptas ducimus architecto dolores nesciunt nulla asperiores quis suscipit, quae, corrupti culpa harum voluptatibus ad sapiente? Vero consequuntur inventore ipsum!</p>

    </div>
  );
};

export default App;

