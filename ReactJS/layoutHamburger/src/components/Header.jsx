import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`lista ${isMenuOpen ? 'open' : ''}`}>
          <li className="itens-nav"><a className="itens-nav-link" href="#home">Home</a></li>
          <li className="itens-nav"><a className="itens-nav-link" href="#about">Sobre</a></li>
          <li className="itens-nav"><a className="itens-nav-link" href="#services">Serviços</a></li>
          <li className="itens-nav"><a className="itens-nav-link" href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
