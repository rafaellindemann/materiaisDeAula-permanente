import React, { useState } from 'react';
import './Sidebar.css'; // Arquivo CSS para estilização

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para mostrar o menu quando o mouse estiver sobre o ícone
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Função para esconder o menu quando o mouse sair do menu
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="sidebar-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="hamburger-icon">☰</div> {/* Ícone de hambúrguer */}

      {isOpen && (
        <div className="sidebar-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
