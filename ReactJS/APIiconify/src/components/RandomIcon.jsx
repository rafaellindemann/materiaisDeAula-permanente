import React, { useEffect, useState } from 'react';
import { Icon, loadIcons } from '@iconify/react';

const RandomIcon = () => {
  const [randomIcon, setRandomIcon] = useState(null);

  useEffect(() => {
    // Lista de ícones do conjunto "mdi" (Material Design Icons)
    // const iconSet = 'mdi';
    const iconSet = 'game-icons';
    const apiUrl = `https://api.iconify.design/collection?prefix=${iconSet}`;

    // Busca a lista de ícones
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // const icons = data.icons;
        const icons = data.uncategorized;

        console.log(icons);
        console.log(data); // pra ver a estrutura da resposta
        const randomIconName = icons[Math.floor(Math.random() * icons.length)];
        setRandomIcon(`${iconSet}:${randomIconName}`);
      })
      .catch((error) => console.error('Erro ao buscar ícones:', error));
  }, []);

  return (
    <div>
      <h1>Ícone Randômico</h1>
      {randomIcon && <Icon icon={randomIcon} width="40" height="40" />}
    </div>
  );
};

export default RandomIcon;