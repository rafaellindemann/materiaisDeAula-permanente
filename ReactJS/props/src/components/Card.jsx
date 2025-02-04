import React from 'react'

function Card({ nome, preco }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço: R${preco}</p>
    </div>
  )
}

export default Card
