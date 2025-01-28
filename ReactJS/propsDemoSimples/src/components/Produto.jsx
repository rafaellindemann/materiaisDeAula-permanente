import React from 'react'

function Produto(props) {
    let p = props.produto
  return (
    <div>
        <p>{p.id}</p>
      <p>{p.nome}</p>
      <p>{p.preco}</p>
    </div>
  )
}

export default Produto
