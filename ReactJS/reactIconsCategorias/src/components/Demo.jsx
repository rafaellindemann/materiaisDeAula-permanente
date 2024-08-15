import React from 'react';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa';
import { GiHamburger } from 'react-icons/gi';
import { MdAlarm, MdFavorite } from 'react-icons/md';

function Demo() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Icons Demo</h1>
      <p>Alguns exemplos de ícones usando React Icons:</p>
      <div style={{ fontSize: '40px' }}>
        <FaBeer style={{ margin: '10px' }} />
        <FaCoffee style={{ margin: '10px' }} />
        <FaApple style={{ margin: '10px' }} />
        <GiHamburger style={{ margin: '10px' }} />
        <MdAlarm style={{ margin: '10px' }} />
        <MdFavorite style={{ margin: '10px', color: 'red' }} />
      </div>
    </div>
  );
}

export default Demo;
