import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaBeer } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

const Favicon = () => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<FaAmericanSignLanguageInterpreting />));
  return (
    <link
      rel="icon"
      type="image/svg+xml"
      href={`data:image/svg+xml,${svgString}`}
    />
  );
};

export default Favicon;
