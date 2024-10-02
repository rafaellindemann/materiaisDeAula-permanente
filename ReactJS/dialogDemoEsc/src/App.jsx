import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  // Hook para fechar o diálogo com a tecla Esc
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }

    // Cleanup para remover o listener quando o componente desmontar
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={openDialog}>Abrir diálogo</button>
      <dialog open={isOpen}>
        <h1>Este é um diálogo</h1>
        <p>Conteúdo do diálogo...</p>
        <button onClick={closeDialog}>Fechar</button>
      </dialog>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reprehenderit voluptas ducimus architecto dolores nesciunt nulla asperiores quis suscipit, quae, corrupti culpa harum voluptatibus ad sapiente? Vero consequuntur inventore ipsum!</p>
    </div>
  );
}

export default App;
