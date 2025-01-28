import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(){
  const images = [
    // "https://via.placeholder.com/300x200.png?text=Imagem+1",
    // "https://via.placeholder.com/300x200.png?text=Imagem+2",
    // "https://via.placeholder.com/300x200.png?text=Imagem+3",
    "./img/casa.png",
    "./img/carro.png",
    "./img/carroDeSom.png",
  ];

  const settings = {
    dots: true, // Adiciona os pontinhos de navegação
    infinite: true, // Loop infinito no carrossel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Carrossel de Imagens</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
